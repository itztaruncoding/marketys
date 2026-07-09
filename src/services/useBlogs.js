import { useQuery } from "@tanstack/react-query";
import { fetchCollection, fetchByField, fetchDocument } from "@/lib/firebase";
import { blogs as staticBlogs, normalizeBlog, sortBlogsByDate } from "@/data/blogs";

const COLLECTION = "blogs";

export function useBlogs() {
  return useQuery({
    queryKey: ["marketys-blogs"],
    queryFn: async () => {
      try {
        const remote = await fetchCollection(COLLECTION, {
          orderBy: { field: "createdAt", direction: "DESCENDING" },
          limit: 50,
        });
        const merged = mergeBlogPosts(staticBlogs, remote);
        return sortBlogsByDate(merged);
      } catch {
        return sortBlogsByDate(staticBlogs);
      }
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
}

export function useBlogBySlug(slug) {
  return useQuery({
    queryKey: ["marketys-blog", slug],
    queryFn: async () => {
      try {
        const remote = await fetchByField(COLLECTION, "slug", "EQUAL", slug);
        if (remote.length > 0) return normalizeBlog(remote[0]);
      } catch {}
      try {
        const doc = await fetchDocument(COLLECTION, slug);
        if (doc) return normalizeBlog(doc);
      } catch {}
      return staticBlogs.find((b) => b.id === slug || b.slug === slug) || null;
    },
    enabled: !!slug,
  });
}

function mergeBlogPosts(local = [], remote = []) {
  if (!remote.length) return local.map((post, i) => normalizeBlog(post, i));
  return remote.map(post => normalizeBlog(post));
}

"use server"
export const getServices = async ({query } : { query?: { [key: string]: string | string[] | undefined } }) => {
    const params = new URLSearchParams()
    if(query && query.searchTerm){
        params.set("searchTerm", query.searchTerm as string)
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?${params.toString()}`, {
        cache : "no-cache",
        next : {
            revalidate : 60 * 60 * 6,
            // tags : ["premium-posts"]
        }
    });
    const result = await res.json();
    return result;
}
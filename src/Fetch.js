export const PopularMovies = async(page) => {
    try{
        let key = `fcf55caed48f3af81ad6a601c8c62a74`
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es&page=${page}`
        const res = await fetch(url);
        const data = await res.json()
        return data
    }catch(error){}
}

export const Populartvs = async(page) => {
    try{
        let key = `fcf55caed48f3af81ad6a601c8c62a74`
        let url = `https://api.themoviedb.org/3/tv/popular?api_key=${key}&page=${page}&language=es`
        const res = await fetch(url);
        const data = await res.json()
        return data
    }catch(error){}
}

export const TopTv = async() => {
    try{
        let key = `fcf55caed48f3af81ad6a601c8c62a74`
        let url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&language=es`
        const res = await fetch(url);
        const data = await res.json()
        return data
    }catch(error){
        console.log(error);
    }
}

export const Search = async (busqueda) => {
    try{
        let key = `fcf55caed48f3af81ad6a601c8c62a74`
        let url = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${busqueda}&page=1&include_adult=false&maximun=10&language=es`
        const res = await fetch(url);
        const data = await res.json()
        return data
    }catch(error){
        console.log(error);
    }
}
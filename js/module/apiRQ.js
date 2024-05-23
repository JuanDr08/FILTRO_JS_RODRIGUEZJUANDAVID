export const getMovieFromPersonalId = async (id) => {
    let data = await fetch(`https://search.imdbot.workers.dev/?q=${id}`).then(res => res.json())
    return data
}

export const getExtraInfoById = async (id) => {
    let data = await fetch(`https://search.imdbot.workers.dev/?tt=${id}`).then(res => res.json())
    return data
}
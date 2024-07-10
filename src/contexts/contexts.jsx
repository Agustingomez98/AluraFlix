import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(); //Creacion del contexto

export const GlobalContextProvider = ({ children }) => {// metodo para compartir el contexto a todos los elementos que envuelva el contextProvider. Estos elementos vienen en el children

    const [openMenu, setOpenMenu] = useState(false);
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [modal, setModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);


    const getData = async () => {
        const resVideos = await fetch("http://localhost:3000/videos");
        const dataVideo = await resVideos.json();
        setVideos(dataVideo);

        const resCategories = await fetch("http://localhost:3000/categories");
        const dataCategories = await resCategories.json();
        setCategories(dataCategories);
    };

    useEffect(() => {
        getData();
    }, [])

    const addVideo = (newVideo) => {
        let newList = [...videos]
        newList.push(newVideo);
        setVideos(newList)
    }

    const updateVideo = (updateVideo) => {
        setVideos(videos.map(video => video.id === updateVideo.id ? updateVideo : video));
    }

    const deleteVideo = (id) => {
        setVideos(videos.filter(video => video.id !== id));
    }

    return <GlobalContext.Provider value={{
        openMenu,
        categories,
        videos,
        modal,
        currentVideo,
        setOpenMenu,
        setCurrentVideo,
        setModal,
        addVideo,
        updateVideo,
        deleteVideo
    }}>
        {children}
    </GlobalContext.Provider>
}


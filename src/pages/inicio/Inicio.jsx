import { useContext, useEffect, useState } from 'react'
import { Banner } from '../../components/Banner/Banner.jsx'
import { GlobalContext } from './../../contexts/contexts';
import { Category } from './../../components/Category/Category';

export const Inicio = () => {


    const { videos, categories } = useContext(GlobalContext);
    const [bannerInfo, setBannerInfo] = useState(videos[0] || {});

    useEffect(() => {
        if (videos.length > 0) {
            setBannerInfo(videos[4]);
        }
    }, [videos]);

    const handlerClickCard = (card) => {
        console.log(card);
        setBannerInfo(card)
        const bannerElement = document.getElementById('banner');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
        }
}
return (<div className='home-container'>
    <Banner bannerInfo={bannerInfo} id="banner" />
    {
        categories.map((category) => (
            <Category
                key={category.name}
                category={category}
                cards={videos.filter((card) => category.name === card.category)}
                handlerClickCard={handlerClickCard}
            />
        ))
    }
</div>
)
}
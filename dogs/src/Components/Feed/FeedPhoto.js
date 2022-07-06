import React from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from '../../api';
import Error from "../Help/Error";
import Loading from '../Help/Loading';
import styles from "./FeedPhoto.module.css";


const FeedPhoto = ({setModalPhoto}) => {

    const { data, loading, error, request} = useFetch();

    React.useEffect(()=>{
        async function fetchPhotos(){
            const {url, option} = PHOTOS_GET({page: 1, total: 6, user: 0});
            const {response, json } = await request(url, option);
            console.log(json)
        }
        fetchPhotos()
    },[request])

    if(error) return <Error error={error}/>
    if(loading) return <Loading />
    if(data)
  return (
    <ul className={`${styles.feed} animeleft`}>
      {data.map((photo)=><FeedPhotoItem setModalPhoto={setModalPhoto} key={photo.id} photo={photo}/>)}
    </ul>
  )
  else return null;
}

export default FeedPhoto

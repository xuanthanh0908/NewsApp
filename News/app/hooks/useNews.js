
import newsApi from '../api/newsApi';
import { useEffect, useState } from 'react';

const qty = 5;
export default function useNews() {
    const [featureNews, setFeatureNews] = useState({});
    const [breakingNews, setBreakingNews] = useState([]);
    const [politicalNews, setPolicalNews] = useState([]);
    const [techNews, setTechNews] = useState([]);
    const [entertainmentNews, setEntertainmentNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const filterFeatured = (data) =>{
        return [...data].filter(item =>item.featured == "on").reverse()[0];
    }
    const filterByCategory = (data,category) =>{
      const result =  [...data].filter(item =>item.category === category).reverse().splice(0,qty);
      if(result.length == qty){
          result.push({type : "viewMore", id : category , category : category});
      }
      return result;
    }
    const filterMutipleNews = async() => {
        setLoading(true);
        const allNews = await newsApi.getAll();
        setFeatureNews(filterFeatured(allNews));
        setBreakingNews(filterByCategory(allNews,"breaking-news"));
        setPolicalNews(filterByCategory(allNews,"political"));
        setTechNews(filterByCategory(allNews,"tech"));
        setEntertainmentNews(filterByCategory(allNews,"entertainment"));
        setLoading(false);
    }
    useEffect(()=>{
        filterMutipleNews();
      },[])
    return [featureNews,breakingNews,politicalNews,techNews,entertainmentNews,loading];
}

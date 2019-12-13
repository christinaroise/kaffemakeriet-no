import React from 'react';
import './previewBlock.css';
import '../ProductsInfo/productsShow.css';
import Carousel from '../carousel/Carousel';
import Kaffe from '../kaffe';

import ArticleBlock from '../articleBlock/ArticleBlock';


const PreviewBlock = (props) => {
  return (
    <article className='previewBlock'>
      <h2>{props.title}</h2>
      {props.showKaffe? <Kaffe showButtonDark="true"/> : null}
      {props.showCarousel? <Carousel showButtonDark="true"/> : null}
      {props.showArticleBlock ? <ArticleBlock/> : null}
    </article>
  );
}

export default PreviewBlock;


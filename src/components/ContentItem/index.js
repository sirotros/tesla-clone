import React from "react";
import Button from "../Button";
import s from "./ContentItem.module.scss";
function ContentItem({ data }) {
  return (
    <section className={s.contentItem}>
      <img src={data.imageURL} alt={data.title} />
      <div className={s.contentArea}>
        <h1 className={s.title}> {data && data.title} </h1>
        <h1 className={s.subtitle}>
          {data && data.subtitle}
          <a href="#" className={s.subtitleLink}>
            {data && data.subtitleLink}
          </a>
        </h1>
        <div className={s.actionWrapper}>
          <Button type="submit" variant="primary">
            {data.leftBtn}
          </Button>
          {data.rightBtn &&<Button type="submit">{data.rightBtn}</Button>}
        </div>
      </div>
    </section>
  );
}

export default ContentItem;

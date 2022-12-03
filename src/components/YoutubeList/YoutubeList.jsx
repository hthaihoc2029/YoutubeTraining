import YoutubeItem from 'components/YoutubeItem/YoutubeItem';
import React from 'react';
import onClickEle from 'App';
import './YoutubeList.css';
const YoutubeList = (props) => {
  const { youtobeList } = props;
  return (
    <div className="youtube__list">
      {youtobeList.map((youtobeItem, idx) => (
        // @ts-ignore
        <YoutubeItem key={youtobeItem.id} youtobeItem={youtobeItem} />
      ))}
    </div>
  );
};

export default YoutubeList;

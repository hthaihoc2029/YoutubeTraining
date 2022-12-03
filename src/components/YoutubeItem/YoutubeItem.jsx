import React from 'react';


const YoutubeItem = (props) => {
  const { youtobeItem } = props;
   function gotoURL() {
      window.open(youtobeItem.song_link)
   }
  return (
    <div className="item-data" style={{ width: '296px' }}>
      <div className="item-data-top"> 
          <img
          onClick={gotoURL}
          src={youtobeItem.song_thumbnail}
          alt={youtobeItem.song_name}
          style={{ width: '296px', height: '166px' }}
        />
        
      </div>
      <div
        className="item-data-bottom"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div className="item-avatar">
          <img
          onClick={gotoURL}
            src={youtobeItem.author_avatar}
            alt={youtobeItem.author_name}
            style={{ width: '36px', height: '36px', borderRadius: '50%' }}
          />
        </div>
        <div className="item-text" style={{ padding: '20px 0px 10px 20px' }}>
          <h4
          onClick={gotoURL}
            className="title"
            style={{ fontSize: '15px', marginBottom: '10px' }}>
            {youtobeItem.title}
          </h4>
          <p
            style={{
              fontSize: '13px',
              marginBottom: '10px',
              color: '#909090',
            }}>
            {youtobeItem.channel}
          </p>
          <p
            style={{
              fontSize: '13px',
              marginBottom: '10px',
              color: '#909090',
            }}>
            {youtobeItem.view} -{youtobeItem.publishedTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;

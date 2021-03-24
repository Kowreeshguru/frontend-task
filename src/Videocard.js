import React from 'react'

function Videocard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videoCard">
            <img src={image} alt="" />
            <div className="videoCard__info"></div>
            <Avatar className="videoCard__avatar" alt={channel} src="{channelImage}" />
        </div>
    )
}

export default Videocard

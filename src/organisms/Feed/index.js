import React from 'react';
import { Panel, Image } from 'ro-component-library';


export const Feed = ({ data }) => (
    <div>
        {data.map((item) => (
            <Panel width="10%" key={item.id}>
                <Image
                    src={item.src}
                    alt={item.title}
                    imgSize="fillWidth" />
                <h1>{item.title}</h1>
            </Panel>
        ))}
    </div> 
);
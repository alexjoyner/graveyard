import React from 'react';
import { Panel, Image } from 'ro-component-library';


export const Feed = ({ data }) => (
    <div>
        {data.map((item) => (
            <a href={item.link} style={{textDecoration: 'none'}}>
                <Panel width={`${item.priority}0%`} key={item.id}>
                    <Image
                        src={item.src}
                        alt={item.title}
                        imgSize="fillWidth" />
                    <h3>{item.title}</h3>
                </Panel>
            </a>
        ))}
    </div> 
);
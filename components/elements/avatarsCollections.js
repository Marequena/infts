import React from 'react';

const data = [
    {
        id: 1,
        name: "Giant",
        descrip: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi.",
        price: 15,
        power: 1500,
        rarity: 0.15,
        avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png",
        cost:1000,
        live:60,
        status:true
    },
    {
        id: 2,
        name: "Giant",
        descrip: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi.",
        price: 15,
        power: 1500,
        rarity: 0.15,
        avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png",
        cost:1000,
        live:60,
        status:true
    },
    {
        id: 3,
        name: "Giant",
        descrip: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi.",
        price: 15,
        power: 1500,
        rarity: 0.15,
        avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png",
        cost:1000,
        live:60,
        status:true
    }
];


const AvatarsCollections = () => {
    return (
        <>

            {data.map((item, i) => (
                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="card items">
                        <div className="card-body">
                            <div class="clash-card giant">
                                <div class="clash-card__image clash-card__image--giant">
                                    <img src={item.avatar} alt="giant" />
                                </div>
                                <div class="clash-card__level clash-card__level--giant">Rarity : {item.rarity}</div>
                                <div class="clash-card__unit-name">{item.name}</div>
                                <div class="clash-card__unit-description">
                                {item.descrip}
                                </div>
                            
                                <div class="clash-card__unit-stats clash-card__unit-stats--giant clearfix">
                                    <div class="one-third">
                                    <div class="stat">{item.power}</div>
                                    <div class="stat-value">Power</div>
                                    </div>
                            
                                    <div class="one-third">
                                    <div class="stat">{item.live}</div>
                                    <div class="stat-value">Live</div>
                                    </div>
                            
                                    <div class="one-third no-border">
                                    <div class="stat">{item.price}$</div>
                                    <div class="stat-value">Price</div>
                                    </div>
                            
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            ))}


        </>
    );
};

export default AvatarsCollections;
import React from 'react'

const adinkra = [
    {   
        image: "/images/adinkrahene.png",
        name: "Adinkra",
        body: "(Chief of Adinkra) - Symbol of greatness, charisma and leadership. Said to have played an inspiring role in designing other symbols",
    },
    {   
        image: "/images/gyenyame.png",
        name: "Gye Nyame",
        body: "(Except God) - Symbol of the supremacy and omnipotence of God. One of the most popular symbols.",
    },
    {   
        image: "/images/sankofa.jpg",
        name: "SANKOFA ",
        body: "(Go back and fetch it) - Symbol of learning from the past",
    },
    {   
        image: "/images/dwen.png",
        name: "Dwennimmen ",
        body: "Reflects strength and humility",
    },
    {   
        image: "/images/eban.png",
        name: "Eban ",
        body: "Reflects strength and humility",
    },
    {   
        image: "/images/dwafen.png",
        name: "AKOFENA",
        body: "(Sword of War) - Symbol of courage, valor, and heroism. The crossed swords were a popular motif in the heraldic shields of many former Akan states",
    },
    {   
        image: "/images/nkyinkyim.png",
        name: "NKYINKYIM",
        body: "Represents life's challenges",
    },
    {   
        image: "/images/adwinasa.jpeg",
        name: "ADWENEASA ",
        body: "Symbolizes creativity and abundance",
    }

]



const Symbols = () => {
  return (
    <div>
      <h1 className="gradient-title lg:text-6xl mb-8 text-center md:text-4xl ">ADINKRA SYMBOLS</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 mx-auto items-center'>
        {adinkra.map((e, index) => {
          return (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg relative group cursor-pointer h-64">
              <img 
                className="w-full h-full object-cover" 
                src={e.image}
                alt={e.name}
              />
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/70 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center overflow-y-auto">
                <h3 className="font-bold text-2xl mb-4 text-white text-center">
                  {e.name}
                </h3>
                <p className="text-gray-200 text-sm text-center">
                  {e.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Symbols
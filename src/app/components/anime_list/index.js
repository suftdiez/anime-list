import Link from "next/link"

const AnimeList = ({title, images, id}) => {
  return (
      <Link href={`/${id}`} className="pointer block overflow-hidden rounded-lg"> 
        <div className="overflow-hidden bg-gray-200">
          <img
            src={images} 
            alt={title} 
            className="w-full h-auto"
          />
        </div>
        <h3 className="font-bold md:text-xl p-4 text-md line-clamp-2">{title}</h3>
      </Link>
  );
};

export default AnimeList;
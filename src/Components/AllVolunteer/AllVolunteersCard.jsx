import Image from "next/image";

const AllVolunteersCard = ({ volunteer }) => {
    return (
        <>
            <div className="card w-96 h-full bg-base-100 mr-7  rounded-sm shadow-xl">
                <figure><img className="w-full h-[300px]" src={volunteer.img} alt="" /></figure>
                <div className="card-body flex flex-col">
                    <h2 className="font-bold text-xl">{volunteer.title}</h2>
                    <p className="">{volunteer.date}</p>
                    <p className='text-sm'>{volunteer.description}</p>
                   
                </div>
            </div>
        </>
    );
};

export default AllVolunteersCard;
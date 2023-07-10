import Image from 'next/image';
import img from '../../assets/images/image1.jpg'
import './FundraisingCommunity.css'

const FundraisingCommunity = () => {
    return (
        <div>
            <div className="fundraising-banner bg-fixed  my-20 py-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 text-gray-200 items-center py-10 md:px-36 px-10 gap-12 bg-black bg-opacity-30">
                    <div>
                        <Image width='100%' height='100%' src={img} alt='fundraising'></Image>
                    </div>
                    <div>
                        <h3 className="font-semibold md:text-4xl text-2xl pb-5">Fundraising Community</h3>
                        <p className='text-sm'>Join our Fundraising Community and make a difference! This is your chance to be part of a supportive group dedicated to raising funds for important causes. Whether you&apos;re an individual, a nonprofit organization, or a passionate team, we welcome you to collaborate and have a positive impact. Our platform is designed to be user-friendly, offering valuable resources for creating compelling fundraising campaigns. Connect with like-minded fundraisers, receive guidance from experienced mentors, and leverage our integrated social media features to expand your reach. Together, let&apos;s transform compassion into action and create lasting change in our communities. Join our Fundraising Community today and start making a difference, campaign by campaign.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FundraisingCommunity;
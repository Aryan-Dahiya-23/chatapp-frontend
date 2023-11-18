interface RingAvatarProps {
    imgSrc: string;
}

const RingAvatar: React.FC<RingAvatarProps> = ({ imgSrc }) => {
    
    return (
        <div className="avatar">
            <div className={`h-8 w-8 md:h-9 md:w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}>
                <img src={imgSrc} alt="profile" />
            </div>
        </div >
    )
}

export default RingAvatar;
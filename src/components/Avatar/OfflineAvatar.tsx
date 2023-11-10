interface OfflineAvatarProps {
    height: string;
    width: string;
    imgSrc: string;
}

const OfflineAvatar: React.FC<OfflineAvatarProps> = ({ height, width, imgSrc }) => {
    return (
        <div className="avatar">
            <div className={`w-${width} h-${height} rounded-full`}>
                <img src={imgSrc} alt="profile" />
            </div>
        </div>
    );
}

export default OfflineAvatar;

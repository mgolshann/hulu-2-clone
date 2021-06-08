import Image from "next/image"
import HeadItems from "./HeadItems"
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline';

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between 
        items-center '>
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeadItems title="Home" Icon={HomeIcon} />
                <HeadItems title="TRENDING" Icon={LightningBoltIcon} />
                <HeadItems title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeadItems title="COLLECTIONS" Icon={CollectionIcon} />
                <HeadItems title="SEARCH" Icon={SearchIcon} />
                <HeadItems title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header

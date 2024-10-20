import {Link} from "react-router-dom";
import {HiMiniBars3CenterLeft} from "react-icons/hi2";
import {IoSearchOutline} from "react-icons/io5";
import {HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart} from "react-icons/hi";
import {RxAvatar} from "react-icons/rx";
import {useState} from "react";
import NavLink from "./NavLink.jsx";
import {useSelector} from "react-redux";

const navigation = [
    {
        id: "1",
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        id: "2",
        name: "Orders",
        path: "/orders"
    },
    {
        id: "3",
        name: "Cart",
        path: "/cart"
    },
    {
        id: "4",
        name: "Checkout",
        path: "/checkout"
    }
]

const NavBar = () => {

    const [isDropDown, setIsDropDown] = useState(false)
    //redux method
    const [cartItems, setCartItems] = useSelector(state => state.cart.cartItems)
    const user = false;

    return (
        <header className={'max-w-screen-2xl mx-auto px-4 py-6'}>
            <nav className={'flex justify-between items-center'}>

                {/*    left */}
                <div className={'flex items-center md:gap-16 gap-4'}>
                    <Link to={'/'}>
                        <HiMiniBars3CenterLeft className={'size-6'}/>
                    </Link>
                    {/*    search */}
                    <div className={'relative sm:w-72 w-40 space-x-2'}>
                        <IoSearchOutline className={'absolute inline-block left-3 inset-y-2'}/>
                        <input type={'text'} placeholder='Search...'
                               className={'bg-[#EAEAEA] w-full py-1 md:px-8 rounded-md focus:outline-none'}/>
                    </div>
                </div>
                {/*    right */}
                <div className={'relative flex justify-between items-center space-x-2 md:space-x-3'}>
                    <div>
                        {
                            user ? <>
                                    <button onClick={() => setIsDropDown(!isDropDown)}>
                                        <img src={'avatar.png'} alt={''}
                                             className={`size-7 rounded-full ${user ? "ring-2 ring-secondary" : ""}`}/>
                                    </button>
                                    {/* Display the drop down*/}
                                    {
                                        isDropDown && (
                                            <div className={'absolute right-0 w-48 mt-2 z-40 rounded-md bg-white shadow-lg '}>
                                                <ul className={'py-2'}>
                                                    {
                                                        navigation.map((item) => (
                                                                <NavLink key={item.id} item={item} setIsDropDown={setIsDropDown}/>
                                                            )
                                                        )
                                                    }
                                                </ul>
                                            </div>

                                        )
                                    }
                                </>
                                :

                                <Link to={'/login'}>
                                    <HiOutlineUser className={'size-6'}/>
                                </Link>

                        }
                    </div>
                    <button className={'hidden sm:block'}>
                        <HiOutlineHeart className={'size-6'}/>
                    </button>
                    <Link to={"/cart"} className={"flex items-center p-1 sm:px-6 px-2 rounded-md bg-primary"}>
                        <HiOutlineShoppingCart className={'size-6'}/>
                        {
                           cartItems && cartItems.length > 0 ?
                                <span className={'text-sm font-semibold sm:ml-1'}>{cartItems.length}</span> :
                                <span className={'text-sm font-semibold sm:ml-1'}>0</span>
                        }
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
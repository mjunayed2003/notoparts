import { BrickWallShield, Coffee, HandFist, Truck } from 'lucide-react'

const Service = () => {
    return (
        <div className="flex justify-around items-center border-b-2 mx-auto py-6 max-w-6xl">
            <div className="flex items-center">
                <Truck className="w-12 h-12 text-red-600 mr-3" />
                <div>
                    <h3 className="text-xl font-bold">Free Shipping</h3>
                    <p className="text-gray-500">For orders from ৳100</p>
                </div>
            </div>
            <div className="flex items-center">
                <HandFist className="w-12 h-12 text-red-600 mr-3" />
                <div>
                    <h3 className="text-xl font-bold">Support 24/7</h3>
                    <p className="text-gray-500">Call us anytime</p>
                </div>
            </div>
            <div className="flex items-center">
                <BrickWallShield className="w-12 h-12 text-red-600 mr-3" />
                <div>
                    <h3 className="text-xl font-bold">100% Safety</h3>
                    <p className="text-gray-500">Only secure payments</p>
                </div>
            </div>
            <div className="flex items-center">
                <Coffee className="w-12 h-12 text-red-600 mr-3" />
                <div>
                    <h3 className="text-xl font-bold">Hot Offers</h3>
                    <p className="text-gray-500">Discounts up to 90%</p>
                </div>
            </div>
        </div>
    )
}

export default Service

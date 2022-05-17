
function Footer() {
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Help centre</p>
            <p>Trust & safety</p>
        </div>
        
    </div>

    <div className="bg-gray-800 border-2 py-2">
      <p className="flex items-center space-y-4 text-xs text-gray-400">Created by Mattper</p>
    </div>
      
    </div>
  )
}

export default Footer;
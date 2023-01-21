
function Footer() {
    const ayear = new Date().getFullYear()
  return ( 
    <div className="footer-adjustment">
    <footer className="footer p-10 bg-gray-700 text-white footer-setting">
        <div className="flex flex-center ">
            <p> &copy;{ayear} portfolio. All right reserved .</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer

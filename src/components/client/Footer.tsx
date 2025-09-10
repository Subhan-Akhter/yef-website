// src/components/client/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yef-blue">Youth Empowerment Foundation</h3>
            <p>Empowering the next generation of leaders through education and opportunity.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-yef-blue/80">About Us</a></li>
              <li><a href="/programs" className="hover:text-yef-blue/80">Programs</a></li>
              <li><a href="/get-involved" className="hover:text-yef-blue/80">Get Involved</a></li>
              <li><a href="/contact" className="hover:text-yef-blue/80">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="/programs/projects" className="hover:text-yef-blue/80">Projects</a></li>
              <li><a href="/programs/events" className="hover:text-yef-blue/80">Events</a></li>
              <li><a href="/programs/courses" className="hover:text-yef-blue/80">Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <p>Email: info@yef.org</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Empowerment St, City, Country</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Youth Empowerment Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
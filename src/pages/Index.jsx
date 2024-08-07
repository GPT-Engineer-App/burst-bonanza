import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, Paw, Heart, Info, ChevronDown, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const catBreeds = [
    { name: "Siamese", image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { name: "Persian", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { name: "Maine Coon", image: "https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { name: "Bengal", image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { name: "Scottish Fold", image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-indigo-50 overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-all duration-300 ${scrollY > 20 ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-shrink-0 flex items-center">
                <Paw className={`h-8 w-8 ${scrollY > 20 ? 'text-indigo-600' : 'text-white'}`} />
                <span className={`ml-2 text-2xl font-bold ${scrollY > 20 ? 'text-gray-900' : 'text-white'}`}>CatWorld</span>
              </div>
            </motion.div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Breeds
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Care
              </a>
            </div>
            <div className="sm:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Breeds</a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Care</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative bg-indigo-800 overflow-hidden min-h-screen flex items-center"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0">
          <motion.img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Cat hero"
            style={{ y: useTransform(scrollY, [0, 300], [0, 150]) }}
          />
          <div className="absolute inset-0 bg-indigo-800 opacity-75"></div>
        </div>
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">All About</span>{' '}
              <span className="block text-indigo-300 xl:inline">Cats</span>
            </h1>
            <p className="mt-3 text-base text-indigo-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              Discover the fascinating world of our feline friends. From their unique characteristics to popular breeds, dive into the realm of cats.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown className="h-12 w-12 animate-bounce" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Cat Breed Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Popular Cat Breeds</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {catBreeds.map((breed, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-center">
                          <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-md mb-4" />
                          <h3 className="font-semibold text-lg">{breed.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                Characteristics of Cats
              </CardTitle>
              <CardDescription className="text-lg">What makes cats unique?</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {["Independent nature", "Excellent hunters with sharp claws and teeth", "Flexible bodies and quick reflexes", "Keen senses, especially hearing and night vision", "Communicate through vocalizations, body language, and scent"].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Paw className="h-5 w-5 text-indigo-500 mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Paw className="h-8 w-8 text-indigo-500 mr-3" />
                Popular Cat Breeds
              </CardTitle>
              <CardDescription className="text-lg">Some well-known cat breeds around the world</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {["Siamese", "Persian", "Maine Coon", "Bengal", "Scottish Fold"].map((breed, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <Paw className="h-5 w-5 text-indigo-500 mr-2" />
                    {breed}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cat Facts Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Fascinating Cat Facts</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { icon: "🌙", title: "Cats sleep for 70% of their lives", content: "On average, cats sleep for about 13 to 16 hours a day. This means they spend about 70% of their lives sleeping!" },
              { icon: "👃", title: "Cats have a unique nose print", content: "Just like human fingerprints, each cat's nose print is unique. No two cats have the same nose print pattern." },
              { icon: "🍬", title: "Cats can't taste sweetness", content: "Unlike humans, cats lack the specific taste receptor for sweetness. This is why they don't have a sweet tooth!" },
              { icon: "👥", title: "A group of cats is called a 'clowder'", content: "While we often think of groups of animals like a pack of dogs or a flock of birds, a group of cats is called a 'clowder'." },
              { icon: "🗣️", title: "Cats have over 20 different vocalizations", content: "From meows to purrs, cats have a wide range of vocalizations. They have over 20 different sounds they use to communicate with humans and other cats." }
            ].map((fact, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold">
                  <span className="mr-2">{fact.icon}</span>
                  {fact.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {fact.content}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Paw className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-2xl font-bold">CatWorld</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">Contact Us</a>
            </div>
            <p className="text-base text-gray-400">
              © 2023 CatWorld. All rights reserved.
            </p>
          </div>
          {/* Newsletter Subscription */}
          <div className="mt-8 border-t border-gray-700 pt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
              />
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Mail className="mr-2 h-4 w-4" /> Subscribe
              </Button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

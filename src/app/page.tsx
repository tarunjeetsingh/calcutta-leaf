import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/calcutta-leaf-logo.jpeg"
                alt="Calcutta Leaf Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <h1 className="text-2xl font-bold text-logo-green">Calcutta Leaf</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-logo-green transition-colors">Home</a>
              <a href="#teas" className="text-gray-700 hover:text-logo-green transition-colors">Our Teas</a>
              <a href="#about" className="text-gray-700 hover:text-logo-green transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-logo-green transition-colors">Contact</a>
            </nav>
            <button className="bg-logo-green text-white px-6 py-2 rounded-full hover:bg-logo-green-dark transition-colors">
              Begin Your Journey
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Where Heritage
                <span className="text-logo-green block">Meets Your Cup</span>
                Across Bharat
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                In the heart of Kolkata, where the Hooghly whispers ancient stories, we craft tea experiences 
                that transcend time. Each blend carries the soul of Bengal&apos;s gardens, the warmth of our heritage, 
                and a promise—to bring authentic Calcutta to every corner of India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-logo-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-logo-green-dark transition-colors">
                  Discover Our Stories
                </button>
                <button className="border-2 border-logo-green text-logo-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors">
                  Gift a Journey
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-logo-green-light to-logo-green rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <Image
                    src="/tea-gift-box.jpeg"
                    alt="Calcutta Leaf Heritage Tea Collection"
                    width={200}
                    height={150}
                    className="rounded-xl mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Curated Collections</h3>
                  <p className="text-gray-600">Three stories, one heritage—beautifully presented</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Calcutta Promise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three pillars hold our heritage—tradition, trust, and the timeless art of tea
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="text-5xl mb-6">🌿</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garden to Cup</h3>
              <p className="text-gray-600">
                From the misty hills of Darjeeling to your morning ritual—each leaf handpicked, 
                each blend a testament to nature&apos;s pure artistry.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="text-5xl mb-6">🏛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Heritage Delivered</h3>
              <p className="text-gray-600">
                Across the length and breadth of Bharat, we carry Kolkata&apos;s warmth to your doorstep. 
                Distance becomes irrelevant when heritage travels home.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="text-5xl mb-6">💝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stories Worth Gifting</h3>
              <p className="text-gray-600">
                Every collection tells a story. Gift not just tea, but tradition. 
                Share not just flavor, but the soul of Calcutta&apos;s tea culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tea Collection Preview */}
      <section id="teas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Three Treasures, One Heritage</h2>
            <p className="text-xl text-gray-600">Each blend whispers tales of Bengal&apos;s finest gardens—choose your story</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 h-48 flex items-center justify-center">
                <span className="text-6xl">🍃</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">CTC Tea</h3>
                <p className="text-gray-600 mb-4">Bold and robust, this is the chai that built Bengal. Strong enough for morning courage, gentle enough for evening conversations.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-logo-green">₹380</span>
                  <button className="bg-logo-green text-white px-4 py-2 rounded-full text-sm hover:bg-logo-green-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 h-48 flex items-center justify-center">
                <span className="text-6xl">�️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Darjeeling Tea</h3>
                <p className="text-gray-600 mb-4">The champagne of teas—delicate muscatel notes dance on your palate like morning mist over the Himalayas.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-logo-green">₹650</span>
                  <button className="bg-logo-green text-white px-4 py-2 rounded-full text-sm hover:bg-logo-green-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-100 to-green-200 h-48 flex items-center justify-center">
                <span className="text-6xl">�</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Green Tea</h3>
                <p className="text-gray-600 mb-4">Nature&apos;s wellness, captured in tender leaves. Each sip carries ancient wisdom and modern vitality in perfect harmony.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-logo-green">₹450</span>
                  <button className="bg-logo-green text-white px-4 py-2 rounded-full text-sm hover:bg-logo-green-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
              <Image
                src="/tea-gift-box.jpeg"
                alt="Complete Tea Collection Gift Box"
                width={300}
                height={200}
                className="rounded-xl mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Complete Collection</h3>
              <p className="text-lg text-gray-600 mb-6">
                All three treasures, thoughtfully curated in our signature gift box. 
                Perfect for tea connoisseurs or as a heartfelt gift that speaks of heritage.
              </p>
              <div className="flex justify-center items-center gap-6 mb-6">
                <span className="text-3xl font-bold text-logo-green">₹1,299</span>
                <span className="text-lg text-gray-500 line-through">₹1,480</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Save ₹181</span>
              </div>
            </div>
            <button className="bg-logo-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-logo-green-dark transition-colors">
              Gift the Complete Journey
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Where It All Began</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In the bustling lanes of Kolkata, where trams sing their eternal song and the air carries whispers 
                of tradition, Calcutta Leaf was born. Not just as a business, but as a keeper of stories—
                stories steeped in the rich brew of Bengal&apos;s tea culture.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe tea is more than a beverage; it&apos;s a conversation starter, a moment of pause, 
                a bridge between the past and present. Every collection we curate carries this philosophy—
                rooted in tradition, yet speaking to the modern soul.
              </p>
              <button className="bg-logo-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-logo-green-dark transition-colors">
                Read Our Complete Story
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-3xl p-8">
                <div className="text-center">
                  <Image
                    src="/calcutta-leaf-logo.jpeg"
                    alt="Calcutta Leaf Heritage"
                    width={120}
                    height={120}
                    className="rounded-2xl mx-auto mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Since 1995</h3>
                  <p className="text-gray-700">Serving authentic Calcutta teas for over 25 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/calcutta-leaf-logo.jpeg"
                  alt="Calcutta Leaf Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <h3 className="text-2xl font-bold text-logo-green-light">Calcutta Leaf</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Where heritage meets your cup, and every sip tells a story of Bengal&apos;s timeless tea tradition.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-logo-green-light transition-colors">Home</a></li>
                <li><a href="#teas" className="text-gray-300 hover:text-logo-green-light transition-colors">Our Teas</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-logo-green-light transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-logo-green-light transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Collections</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">CTC Tea</span></li>
                <li><span className="text-gray-300">Darjeeling Tea</span></li>
                <li><span className="text-gray-300">Green Tea</span></li>
                <li><span className="text-gray-300">Gift Collections</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 Kolkata, West Bengal</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ hello@calcuttaleaf.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Calcutta Leaf. All rights reserved. | Crafted with love for tea connoisseurs across Bharat
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
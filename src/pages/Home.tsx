import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Churches of Christ 80th Annual "Historical" National Lectureship
          </h1>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-slate-100 font-semibold mb-4 leading-relaxed">
              "One Lord… One Faith… One Baptism"
            </p>
            <p className="text-lg text-slate-200 mb-4 leading-relaxed">
              In Cooperation and Supported by the Greater Atlanta, Georgia, Area Churches of Christ
            </p>
            <p className="text-lg md:text-xl text-slate-100 font-semibold mb-2 leading-relaxed">
              Lectureship Theme: "Here We Stand" (Ephesians 6:14-17)
            </p>
            <p className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed">
              March 8-12, 2026 • Atlanta, Georgia
            </p>
            
            {/* Theme Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                A Celebration of Faith & Community
              </h2>
              <p className="text-lg md:text-xl text-slate-100 leading-relaxed">
                Join us for Five days of <span className="font-semibold text-white">Faithfulness, Fellowship, Edification, Exhortation, and Enlightenment</span> as we Celebrate the Visible Kingdom of God's Dear Son
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-white text-slate-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-slate-100 transform hover:scale-105 transition-all duration-200 text-lg"
            >
              Register Now
            </Link>
            <Link 
              to="/hotel" 
              className="bg-slate-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-slate-600 transform hover:scale-105 transition-all duration-200 text-lg"
            >
              Hotel Information
            </Link>
          </div>
        </div>
      </section>
      
      {/* Event Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Event Highlights</h2>
          <p className="text-center text-gray-600 mb-12">Join us for five days of fellowship, worship, and spiritual growth</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg border border-slate-200">
              <p className="text-slate-800 font-semibold text-lg">📅 March 9-13, 2026</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg border border-slate-200">
              <p className="text-slate-800 font-semibold text-lg">📍 Atlanta, Georgia</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg border border-slate-200">
              <p className="text-slate-800 font-semibold text-lg">🏨 Courtland Grand Hotel</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-slate-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5 Days</h3>
              <p className="text-gray-600">March 9-13, 2026</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Venue</h3>
              <p className="text-gray-600">Courtland Grand Hotel</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎤</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inspiring Speakers</h3>
              <p className="text-gray-600">Renowned Bible scholars</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fellowship</h3>
              <p className="text-gray-600">Connect with believers nationwide</p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img 
              src="/speaker-at-podium.png" 
              alt="Speaker at lectureship"
              className="w-full h-56 object-cover object-top rounded-lg shadow-lg"
            />
            <img 
              src="/speaker-portrait.png" 
              alt="Lectureship speaker"
              className="w-full h-56 object-cover object-center rounded-lg shadow-lg"
            />
            <img 
              src="/group-discussion.png" 
              alt="Fellowship at lectureship"
              className="w-full h-56 object-cover object-center rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Theme and Scripture Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">2026 Lectureship Theme</h3>
            </div>
            <div className="text-center mb-6">
              <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                "Here We Stand"
              </h4>
              <p className="text-lg text-slate-600 font-semibold">
                Ephesians 6:14-17
              </p>
            </div>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6 pl-4 border-l-4 border-slate-400">
              "Stand firm therefore, having belted your waist with truth, and having put on the
              breastplate of righteousness, and having strapped on your feet the preparation of
              the gospel of peace; in addition to all, taking up the shield of faith with which you
              will be able to extinguish all the flaming arrows of the evil one. And take the helmet
              of salvation, and the sword of the Spirit, which is the word of God."
            </blockquote>
            <cite className="block text-slate-800 font-semibold text-lg text-center">
              — Ephesians 6:14-17 NASB
            </cite>
          </div>
        </div>
      </section>

      {/* Rest of the component continues... */}
      {/* I'll continue with the rest in the next message due to length */}
    </div>
  );
}

export default Home;

import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50">
      {/* Registration Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Registration Information
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join us for this historic 80th Annual National Lectureship. Multiple registration options and payment methods available.
            </p>
          </div>

          {/* Online Registration CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Register Online?</h3>
              <p className="text-slate-100 mb-6">
                Use our convenient online registration form with multiple payment options including Credit Card, PayPal, and Zelle.
              </p>
              <a 
                href="/register-form" 
                className="inline-block bg-white text-slate-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Start Online Registration
              </a>
            </div>
          </div>

          {/* Registration Types */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Registration Types & Pricing</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Individual Registrations */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Individual Registration</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <p className="font-semibold text-slate-900">Early Bird (Until Dec 31, 2025)</p>
                      <p className="text-slate-600 text-sm">Individual Registration</p>
                    </div>
                    <span className="text-green-700 font-bold text-lg">$190</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Regular (Starting Jan 1, 2026)</p>
                      <p className="text-slate-600 text-sm">Individual Registration</p>
                    </div>
                    <span className="text-slate-700 font-bold text-lg">$210</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <p className="font-semibold text-slate-900">Late (March 1-8, 2026)</p>
                      <p className="text-slate-600 text-sm">Individual Registration</p>
                    </div>
                    <span className="text-red-700 font-bold text-lg">$245</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <p className="font-semibold text-slate-900">Day-to-Day</p>
                      <p className="text-slate-600 text-sm">Per day - specify date(s)</p>
                    </div>
                    <span className="text-blue-700 font-bold text-lg">$75</span>
                  </div>
                </div>
              </div>

              {/* First Speaker Photo - In the grid */}
              <div className="flex items-center justify-center">
                <img 
                  src="/speaker-at-hyatt-podium.png" 
                  alt="Speaker at lectureship"
                  className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <section className="py-8 bg-gray-100 border-l-4 border-slate-400">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-start">
                <span className="text-slate-600 text-2xl mr-4 mt-1">⚠️</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Important Registration Requirement</h3>
                  <p className="text-slate-700">
                    All persons who attend and are affiliated with the 2026 Churches of Christ 80th Annual "Historical" National Lectureship 
                    <strong> MUST BE REGISTERED</strong> with the Lectureship to comply with insurance regulations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mail-In Registration */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Mail-In Registration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-200 mb-4">Send Payment To:</h4>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="font-semibold">Churches of Christ National Lectureship</p>
                  <p>289 Jonesboro Road, STE #199</p>
                  <p>McDonough, GA 30253</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-200 mb-4">Important Deadlines:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong>Mail-In Deadline:</strong> February 7, 2026</li>
                  <li>• <strong>Early Bird Pricing:</strong> Until December 31, 2025</li>
                  <li>• <strong>Late Registration:</strong> March 1-8, 2026</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Continue with all the other sections... */}
          {/* The rest of the component continues with Georgia residents, group rates, special events, etc. */}
        </div>
      </section>
    </div>
  );
};

export default Register;

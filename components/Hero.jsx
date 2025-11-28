import Image from "next/image"; 
export default function Hero() 
{ return (<section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-blue-700">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" /> 
     <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24"> 
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center min-h-[calc(100vh-8rem)]"> 
            {/* LEFT CONTENT */} 
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left"> 
                <div className="space-y-4"> 
                    <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"> Transform Your Body, Elevate Your Life </h1> 
                    <p className="text-lg text-white/90 sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0"> Join thousands who've already started their journey to a stronger, healthier you. </p> 
                    </div> 
                    {/* CTA BUTTONS */}
                     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> 
                        <button className="bg-white text-blue-700 hover:bg-white/90 text-lg px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"> Start Your Journey </button> 
                        <button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all"> Download App </button> 
                        </div> 
                        {/* SOCIAL PROOF */}
                         <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4"> <div className="text-center lg:text-left"> 
                            <div className="text-3xl font-bold text-white">50K+</div>
                             <div className="text-sm text-white/80">Active Members</div> 
                             </div>
                              <div className="text-center lg:text-left">
                                 <div className="text-3xl font-bold text-white">500+</div> 
                                 <div className="text-sm text-white/80">Workouts</div>
                                  </div> <div className="text-center lg:text-left"> 
                                    <div className="text-3xl font-bold text-white">4.9★</div> 
                                    <div className="text-sm text-white/80">App Rating</div>
                                     </div> 
                                     </div> 
                                     </div> 
                                     {/* RIGHT SIDE IMAGE */} 
                                     <div className="relative flex items-center justify-center lg:justify-end">
                                         <div className="relative w-full max-w-lg lg:max-w-none"> 
                                            {/* Decorative blur circles */} 
                                            <div className="absolute -top-6 -right-6 w-72 h-72 bg-white/20 rounded-full blur-3xl" /> 
                                            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl" />
                                             {/* Main Gym Image */}
                                              <div className="relative aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                                               <Image src="/img.png" alt="Fitness transformation" fill className="object-cover rounded-3xl" /> 
                                               </div> 
                                               {/* FLOATING CARD */} 
                                               <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl backdrop-blur-sm">
                                                 <div className="flex items-center gap-3"> 
                                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 flex items-center justify-center"> <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> </svg> </div> <div> <div className="text-sm font-semibold text-gray-700">Calories Burned</div> <div className="text-2xl font-bold text-blue-600">347
                                                        </div> </div> </div> </div> </div> </div> </div> </div> </section>); }
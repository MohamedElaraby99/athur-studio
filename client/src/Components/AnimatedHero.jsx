import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllInstructors } from '../Redux/Slices/InstructorSlice';
import { FaGraduationCap, FaStar } from 'react-icons/fa';
import logo from '../assets/logo.png';
import logoSvg from '../assets/3.svg';
import { HERO, BRAND } from '../Constants/LayoutConfig';
import { generateImageUrl } from '../utils/fileUtils';
import { placeholderImages } from '../utils/placeholderImages';

const AnimatedHero = ({ onGetStarted }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { instructors, loading: instructorsLoading } = useSelector((state) => state.instructor);

  useEffect(() => {
    setIsVisible(true);
    // Fetch all instructors
    dispatch(getAllInstructors({ page: 1, limit: 100 }));
  }, [dispatch]);

  // Check for dark mode from HTML class (set by Navbar)
  useEffect(() => {
    const checkDarkMode = () => {
      const htmlElement = document.documentElement;
      const isDark = htmlElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Check initially
    checkDarkMode();

    // Listen for changes to the HTML class
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/courses');
    } else {
      onGetStarted();
    }
  };

  const buttonText = isLoggedIn ? 'ابدأ التعلم الآن' : 'سجل الآن';

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} dir="rtl">
      {/* Background Pattern */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}>
        {/* Subtle gradient background */}
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-primary/10' : 'bg-primary/5'}`}></div>

        {/* Geometric shapes */}
        <div className={`absolute top-20 left-20 w-32 h-32 rounded-full ${isDarkMode ? 'bg-primary/10' : 'bg-primary/20'}`}></div>
        <div className={`absolute top-40 right-40 w-24 h-24 rounded-full ${isDarkMode ? 'bg-primary/10' : 'bg-primary/20'}`}></div>
        <div className={`absolute bottom-40 left-40 w-20 h-20 rounded-full ${isDarkMode ? 'bg-primary/10' : 'bg-primary/20'}`}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? '#ffffff' : '#000000'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12 relative z-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          {/* Logo Section - First */}
          <div className="relative mb-8 pb-8 md:pb-0lg:pb-16">
            <div className="relative">
              <img
                src={HERO.teacherImageUrl || logoSvg}
                alt={BRAND.teacherName}
                className="w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain relative z-10"
              />
              {/* Subtle glow effect behind logo */}
              <div className={`absolute inset-0 w-full h-full rounded-full blur-3xl transition-all duration-300 ${isDarkMode ? 'bg-primary/20' : 'bg-primary/30'}`}></div>
            </div>

            {/* Small Circles */}
            <div className={`absolute top-16 right-16 w-3 h-3 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-primary-light' : 'bg-primary/30'}`}></div>
            <div className={`absolute bottom-16 left-16 w-5 h-5 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-primary-light' : 'bg-primary/30'}`}></div>
            <div className={`absolute bottom-8 right-8 w-3 h-3 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-primary-light' : 'bg-primary/30'}`}></div>
          </div>

          {/* Text Content - Below Logo */}
          <div className="text-center space-y-6 relative z-10 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-primary-light/20 text-primary dark:text-primary-light rounded-full text-xs md:text-sm font-medium font-cairo">{HERO.topText}</div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight transition-colors duration-300 text-primary dark:text-primary-light">
              {HERO.mainTitle}
            </h1>

            <p className={`text-2xl leading-relaxed max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              {HERO.subtitle}
            </p>

            <div className="pt-6">
              <button
                onClick={handleButtonClick}
                className="btn-primary px-8 py-4 rounded-lg text-xl font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                {/* Button background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{HERO.ctaButtonText}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section - Below Hero */}
      <section className="px-6 py-12 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            مدرسونا المتميزون
          </h2>
            {instructorsLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : instructors && instructors.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                {instructors.slice(0, 12).map((instructor) => (
                  <div
                    key={instructor._id}
                    className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
                  >
                    {/* Instructor Photo */}
                    <div className="relative w-full aspect-square bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800 rounded-t-xl overflow-hidden flex items-center justify-center p-2">
                      {instructor.profileImage?.secure_url ? (
                        <img
                          src={generateImageUrl(instructor.profileImage.secure_url)}
                          alt={instructor.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = placeholderImages.avatar;
                          }}
                        />
                      ) : (
                        <FaGraduationCap className="text-gray-400 dark:text-gray-500 text-4xl" />
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-4 text-center">
                      <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-1">
                        {instructor.name}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                        {instructor.specialization || 'مدرس'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                لا يوجد مدرسين متاحين حالياً
              </div>
            )}
        </div>
      </section>
    </div>
  );
};

export default AnimatedHero; 
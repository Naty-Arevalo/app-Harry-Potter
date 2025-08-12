import { FaArrowLeft, FaArrowRight, FaMagic, FaSpinner } from "react-icons/fa";
import ButtonBack from "../ButtonBack";
import { FaWandSparkles } from "react-icons/fa6";

const HechizosDetail = ({ harryPotter, id, setId, loading, loadingDirection }) => {
  const handleAnterior = () => {
    id > 1 && setId(id - 1, 'anterior');
  };

  const handleSiguiente = () => {
    setId(id + 1, 'siguiente');
  };

  return (
      <div className="relative z-10">

        {/* Contenido principal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {harryPotter && (
            <div className="bg-gradient-to-br from-yellow-800/20 to-yellow-600/20 backdrop-blur-sm border-2 border-yellow-400/30 rounded-2xl shadow-lg
            shadow-yellow-500/25 p-6 sm:p-8 mb-8">
              {/* Número del hechizo */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-yellow-400/30 rounded-full px-4 py-2">
                  <FaMagic className="text-yellow-400 text-lg"/>
                  <span className="font-merriweather text-yellow-300 font-semibold">
                    Hechizo #:{id}
                  </span>
                </div>
              </div>
              {/* Nombre del hechizo */}
              <div className="mb-6 sm:mb-8">
                <h2 className="font-crimson text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <FaWandSparkles className="text-yellow-400 text-lg sm:text-xl"/>
                Nombre del Hechizo: 
                </h2>
                <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 border border-yellow-400/20 rounded-xl p-4 sm:p-6">
                  <p className="font-merriweather text-lg sm:text-xl md:text-2xl text-yellow-200 font-semibold text-center">
                    {harryPotter.hechizo}
                  </p>
                </div>
              </div>

              {/* Propósito del hechizo */}
              <div className="mb-6 sm:mb-8">
                <h2 className="font-crimson text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  <FaMagic className="text-yellow-400 text-lg sm:text-xl"/>
                  Propósito: 
                </h2>
                <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 border border-yellow-400/20 rounded-xl p-4 sm:p-6">
                  <p className="font-merriweather text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  {harryPotter.uso}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navegación */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border-2 transition-all duration-100 font-merriweather font-semibold ${
            id > 1
            ? 'border-yellow-400/30 hover:border-yellow-300 bg-yellow-800/20 hover:bg-yellow-700/20 hover:text-yellow-100 transform hover:scale-105'
            : 'border-gray-600/30 bg-border-gray-800/20 text-gray-500 cursor-not-allowed'
            } `}
            onClick={handleAnterior}
            disabled={id <= 1 || (loading && loadingDirection === 'anterior')}
            >
              {loading && loadingDirection === 'anterior' ? (
                <FaSpinner className="text-sm sm:text-base text-yellow-400 animate-spin"/>
              ):(
                <FaArrowLeft className="text-sm sm:text-base"/>
              )}
              <span className="text-sm sm:text-base">
              {loading && loadingDirection === 'anterior' ? 'Cargando...' : 'Anterior'}
              </span>
            </button>

            <div className="bg-yellow-900/30 border border-yellow-400/30 rounded-full px-2 py-2">
              <span className="font-merriweather text-yellow-300 font-semibold text-xs sm:text-base">
                {id} / 72
              </span>
            </div>

            <button 
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border-2 transition-all duration-100 font-merriweather font-semibold ${
              id < 72
              ? 'border-yellow-400/30 hover:border-yellow-300 bg-yellow-800/20 hover:bg-yellow-700/20 hover:text-yellow-100 transform hover:scale-105'
              : 'border-gray-600/30 bg-border-gray-800/20 text-gray-500 cursor-not-allowed'
              } `}
              onClick={handleSiguiente}
              disabled={id >= 72 || (loading && loadingDirection === 'siguiente')}
              >
              <span className="text-sm sm:text-base">
                {loading && loadingDirection === 'siguiente' ? 'Cargando...' : 'Siguiente'}
              </span>
              {loading && loadingDirection === 'siguiente' ? (
                <FaSpinner className="text-sm sm:text-base text-yellow-400 animate-spin"/>
              ):(
                <FaArrowRight className="text-sm sm:text-base" />
              )}  
            </button>
          </div>

          {/* Botón de regreso */}
          <div className="flex justify-center mb-8">
            <ButtonBack/>
          </div>
        </div>
      </div>
  );
};

export default HechizosDetail;

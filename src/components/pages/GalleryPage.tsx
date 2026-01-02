import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { GalleryPhotos } from '@/entities';

export default function GalleryPage() {
  const [photos, setPhotos] = useState<GalleryPhotos[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhotos | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchPhotos = async () => {
      const { items } = await BaseCrudService.getAll<GalleryPhotos>('galleryphotos');
      setPhotos(items);
    };

    fetchPhotos();
  }, []);

  const categories = ['All', ...Array.from(new Set(photos.map(p => p.category).filter(Boolean)))];
  
  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/2019fd_9b11802017284bbf9e55eadf197ac240~mv2.png?originWidth=1920&originHeight=704"
            alt="Gallery"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Photo Gallery
          </motion.h1>
          <motion.p
            className="text-xl font-paragraph text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Capturing moments of excellence and campus life
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      {categories.length > 1 && (
        <section className="py-12 px-6 lg:px-12 bg-white sticky top-20 z-40 shadow-sm">
          <div className="max-w-[100rem] mx-auto">
            <div className="flex items-center justify-center flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-paragraph text-sm transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/50 text-foreground hover:bg-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl font-paragraph text-foreground/60">
                No photos found. Please check back later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo._id}
                  className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.5 }}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  {photo.photo ? (
                    <Image
                      src={photo.photo}
                      alt={photo.title || 'Gallery Photo'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      width={400}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    {photo.title && (
                      <h3 className="text-white font-paragraph font-semibold text-sm mb-1">
                        {photo.title}
                      </h3>
                    )}
                    {photo.description && (
                      <p className="text-white/80 font-paragraph text-xs line-clamp-2">
                        {photo.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {selectedPhoto.photo && (
                <Image
                  src={selectedPhoto.photo}
                  alt={selectedPhoto.title || 'Gallery Photo'}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  width={1200}
                />
              )}
              <div className="mt-6 text-center">
                {selectedPhoto.title && (
                  <h2 className="text-2xl font-heading font-bold text-white mb-2">
                    {selectedPhoto.title}
                  </h2>
                )}
                {selectedPhoto.description && (
                  <p className="text-lg font-paragraph text-white/80">
                    {selectedPhoto.description}
                  </p>
                )}
                {selectedPhoto.category && (
                  <span className="inline-block mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-paragraph font-semibold">
                    {selectedPhoto.category}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

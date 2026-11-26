import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  Phone,
  Instagram,
  CheckCircle2,
} from 'lucide-react';
import { BRAND_ASSETS, CONTACT_INFO } from '../data/brandContent';
import { EDITORIAL_EASE } from './MotionPrimitives';

interface BoutiqueContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BoutiqueContactModal({
  isOpen,
  onClose,
}: BoutiqueContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setNote('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="boutique-modal-title"
        >
          {/* Warm Espresso Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-espresso/50 backdrop-blur-md"
          />

          {/* Glass & Cream Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-espresso/15 bg-cream shadow-[0_32px_90px_-20px_rgba(44,36,30,0.28)]"
          >
            <button
              type="button"
              onClick={resetAndClose}
              aria-label="Pencereyi kapat"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 bg-beige/80 text-espresso transition-colors hover:bg-latte hover:text-cream"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Store Info Panel */}
              <div className="bg-beige/85 p-7 sm:p-8 md:col-span-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-espresso/15">
                <div>
                  <div className="mb-4 h-16 w-16 overflow-hidden rounded-full shadow-sm">
                    <img
                      src={BRAND_ASSETS.logo}
                      alt="LC Kids Logosu"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-latte-hover">
                    Mağaza Ziyareti
                  </p>
                  <h2
                    id="boutique-modal-title"
                    className="mt-1.5 font-serif text-3xl font-semibold text-espresso"
                  >
                    {CONTACT_INFO.storeTitle}
                  </h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-espresso-muted">
                    Doğal kumaşlarımızı yakından incelemek için mağazamıza
                    bekleriz.
                  </p>

                  <div className="mt-6 space-y-4 text-xs font-medium text-espresso">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-latte-hover" strokeWidth={2} />
                      <span>
                        {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-latte-hover" strokeWidth={2} />
                      <span>
                        <strong className="font-semibold">
                          {CONTACT_INFO.hoursPrimary}
                        </strong>
                        <br />
                        <span className="text-espresso-muted">
                          {CONTACT_INFO.hoursSecondary}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-latte-hover" strokeWidth={2} />
                      <a
                        href={CONTACT_INFO.phoneHref}
                        className="font-semibold hover:text-latte-hover transition-colors"
                      >
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-latte-hover" strokeWidth={2} />
                      <a
                        href={CONTACT_INFO.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold hover:text-latte-hover transition-colors"
                      >
                        {CONTACT_INFO.instagramHandle}
                      </a>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-latte-hover" strokeWidth={2} />
                      <span>{CONTACT_INFO.email}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-latte px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-latte-hover"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2} />
                  <span>WhatsApp ile Ulaşın</span>
                </a>
              </div>

              {/* Right Inquiry Form */}
              <div className="p-7 sm:p-8 md:col-span-7">
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige text-latte-hover">
                      <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-semibold text-espresso">
                      Mesajınız Mağazamıza Ulaştı
                    </h3>
                    <p className="mt-2 max-w-xs text-sm font-medium leading-relaxed text-espresso-muted">
                      En kısa sürede size dönüş yapacağız.
                    </p>
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="mt-6 rounded-full border border-espresso/20 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-beige"
                    >
                      Kapat
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-latte-hover">
                        Doğrudan İletişim
                      </p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold text-espresso">
                        Bize Bir Not Bırakın
                      </h3>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-espresso"
                      >
                        Adınız Soyadınız
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Örn. Zeynep Yılmaz"
                        className="mt-1.5 w-full rounded-2xl border border-espresso/15 bg-beige/45 px-4 py-2.5 text-sm font-medium text-espresso placeholder:text-espresso-light/70 focus:border-latte focus:bg-cream focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-espresso"
                      >
                        E-posta Adresiniz
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="zeynep@ornek.com"
                        className="mt-1.5 w-full rounded-2xl border border-espresso/15 bg-beige/45 px-4 py-2.5 text-sm font-medium text-espresso placeholder:text-espresso-light/70 focus:border-latte focus:bg-cream focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-note"
                        className="block text-xs font-semibold uppercase tracking-[0.14em] text-espresso"
                      >
                        Mesajınız
                      </label>
                      <textarea
                        id="contact-note"
                        rows={3}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Mağazamız hakkında merak ettiklerinizi yazabilirsiniz..."
                        className="mt-1.5 w-full resize-none rounded-2xl border border-espresso/15 bg-beige/45 px-4 py-2.5 text-sm font-medium text-espresso placeholder:text-espresso-light/70 focus:border-latte focus:bg-cream focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-espresso py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-latte"
                    >
                      Mesajı Gönder
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

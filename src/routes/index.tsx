import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  Clock3,
  GraduationCap,
  Image as ImageIcon,
  MapPinned,
  Mic2,
  Music2,
  Pause,
  Play,
  Quote,
  Sparkles,
  Stars,
  Volume2,
  VolumeX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import classmatesDastarkhan1 from "@/assets/classmates-dastarkhan-1.jpeg.asset.json";
import classmatesDastarkhan2 from "@/assets/classmates-dastarkhan-2.jpeg.asset.json";
import classmatesDastarkhan3 from "@/assets/classmates-dastarkhan-3.jpeg.asset.json";
import classmatesGameNight from "@/assets/classmates-game-night.jpeg.asset.json";
import classmatesMountain1 from "@/assets/classmates-mountain-1.jpeg.asset.json";
import classmatesMountain2 from "@/assets/classmates-mountain-2.jpeg.asset.json";
import classmatesOvenSelfie from "@/assets/classmates-oven-selfie.jpeg.asset.json";
import graduatesFormalPortrait from "@/assets/graduates-formal-portrait.png.asset.json";
import wholeClassStage from "@/assets/whole-class-stage.jpeg.asset.json";
import boysStageFun from "@/assets/boys-stage-fun.jpeg.asset.json";
import { cn } from "@/lib/utils";

// --- New images from user's folder ---
const newImg = {
  event1: "/images/1772595893103.jpeg",
  event2: "/images/1772764803112.jpeg",
  event3: "/images/1773345529518.jpeg",
  event4: "/images/1773345579207.jpeg",
  event5: "/images/1773491161677.jpeg",
  event6: "/images/1773491188060.jpeg",
  event7: "/images/1773491257837.jpeg",
  portrait1: "/images/1773345345602.jpeg",
  portrait2: "/images/1773490455473.jpeg",
  portrait3: "/images/1773491507333.png",
  portrait4: "/images/1773491558968.jpeg",
  portrait5: "/images/1773491621770.jpeg",
  wa1: "/images/WhatsApp%20Image%202026-06-16%20at%2018.37.49.jpeg",
  wa2: "/images/WhatsApp%20Image%202026-06-16%20at%2018.37.50.jpeg",
};

const eventDate = new Date("2026-06-17T15:00:00+05:00");

const heroSlides = [
  { src: classmatesMountain1.url, alt: "Тауда түскен сынып естелігі" },
  { src: wholeClassStage.url, alt: "Мерекелік кештегі ортақ сынып фотосы" },
  { src: classmatesDastarkhan1.url, alt: "Дастархан басындағы сынып кеші" },
  { src: graduatesFormalPortrait.url, alt: "Түлектердің ресми портреті" },
  { src: classmatesMountain2.url, alt: "Табиғат аясындағы түлектер фотосы" },
  { src: newImg.event1, alt: "Түлектердің салтанатты фотосы" },
  { src: newImg.event2, alt: "Сыныптың үлкен ортақ естелігі" },
  { src: newImg.event3, alt: "Түлектер кешкі ас үстінде" },
];

const memoryGallery = [
  { src: newImg.event1, alt: "", size: "wide" },
  { src: newImg.event2, alt: "", size: "medium" },
  { src: newImg.event3, alt: "", size: "tall" },
  { src: newImg.event4, alt: "", size: "wide" },
  { src: newImg.event5, alt: "", size: "medium" },
  { src: newImg.event6, alt: "", size: "tall" },
  { src: newImg.event7, alt: "", size: "medium" },
  { src: newImg.portrait1, alt: "", size: "medium" },
  { src: newImg.portrait2, alt: "", size: "wide" },
  { src: newImg.portrait3, alt: "", size: "tall" },
  { src: newImg.portrait4, alt: "", size: "medium" },
  { src: newImg.portrait5, alt: "", size: "wide" },
  { src: newImg.wa1, alt: "", size: "medium" },
  { src: newImg.wa2, alt: "", size: "medium" },
];

const graduates = [
  {
  name: "Шабдан Асхат",
  quote: "Бүгінгі естелік — ертеңгі арманға күш береді.",
  image: "https://cdn.phototourl.com/free/2026-06-16-73f878b8-f41e-44ce-b2cb-9f55166b922e.jpg",
  alt: "Шабдан Асхат",
},
{
  name: "Тоқтасын Саян",
  quote: "Біз бірге бастаған жолды жарқын болашаққа жалғаймыз.",
  image: "https://cdn.phototourl.com/free/2026-06-16-1b4658a9-b422-4af6-b6ee-fbc3544db9a6.png",
  alt: "Тоқтасын Саян",
},
{
  name: "Айтбекұлы Аслан",
  quote: "Сыныптың әр күні жүректе мәңгі сақталады.",
  image: "",
  alt: "Айтбекұлы Аслан",
},
{
  name: "Қалибекұлы Бекзат",
  quote: "Бұл кеш — достық пен үміттің ең әдемі белгісі.",
  image: "",
  alt: "Қалибекұлы Бекзат",
},
{
  name: "Мұрат Балқия",
  quote: "Армандарымыз асқақ, ал естеліктеріміз одан да қымбат.",
  image: "https://user14155.na.imgto.link/public/20260616/whatsapp-image-2026-06-16-at-20-03-58.avif",
  alt: "Мұрат Балқия",
},
{
  name: "Базарбай Танжарық",
  quote: "Соңғы қоңырау — жаңа өмір есігінің сыңғыры.",
  image: "https://cdn.phototourl.com/free/2026-06-16-6e4e1b43-e506-4b1d-9104-9699e4635d09.png",
  alt: "Базарбай Танжарық",
},
{
  name: "Сапарғали Жанерке",
  quote: "Біздің жолымызды жарық еткен ұстаздарға мың алғыс.",
  image: "https://cdn.phototourl.com/free/2026-06-16-0d99473a-e903-4e31-8773-681e5f8f612a.png",
  alt: "Сапарғали Жанерке",
},
{
  name: "Мұрат Камила",
  quote: "Бұл күн — жүрекке алтын әріппен жазылатын күн.",
  image: "",
  alt: "Мұрат Камила",
},
{
  name: "Бекжанова Жанель",
  quote: "Болашаққа бірге қараған сәттеріміз ешқашан ұмытылмайды.",
  image: "https://cdn.phototourl.com/free/2026-06-16-73773db4-8481-46dd-bc8f-a0c636113fc0.png",
  alt: "Бекжанова Жанель",
},
{
  name: "Ахмет Мансұр",
  quote: "Достық, білім, арман — бәрі осы сыныпта тоғысты.",
  image: "https://cdn.phototourl.com/free/2026-06-16-ecc63910-be9e-402a-8485-bbbbbfe45994.png",
  alt: "Ахмет Мансұр",
},
{
  name: "Жанабіл Дияс",
  quote: "Алдымызда үлкен жол тұр, бірақ жүректе мектеп қалады.",
  image: "",
  alt: "Жанабіл Дияс",
},
{
  name: "Амангелді Мақсат",
  quote: "Әрбір қадамымыз ата-ана мен ұстаз сеніміне лайық болсын.",
  image: "https://cdn.phototourl.com/free/2026-06-16-2c8fd143-644e-429f-a8c2-3c677dbf1b4b.png",
  alt: "Амангелді Мақсат",
},
{
  name: "Марат Аружан",
  quote: "Біз бірге армандаған болашаққа сеніммен қадам басамыз.",
  image: "https://cdn.phototourl.com/free/2026-06-16-024e9872-2702-4551-a65f-746f021caa52.png",
  alt: "Марат Аружан",
},
{
  name: "Нұржанұлы Азаматт",
  quote: "Естелікке толы жылдар үшін шексіз ризамыз.",
  image: "",
  alt: "Нұржанұлы Азаматт",
},
{
  name: "Бақыт Ерасыл",
  quote: "Соңғы қоңырау — үлкен армандарға бастар алғашқы үн.",
  image: "https://cdn.phototourl.com/free/2026-06-16-4af9ac8b-33e3-4044-b9df-0bc5ca420a81.png",
  alt: "Бақыт Ерасыл",
},
{
  name: "Алимханов Мирас",
  quote: "Бұл шақыру — біздің жүрекке жақын сәттеріміздің айнасы.",
  image: "https://user14155.na.imgto.link/public/20260616/2026-06-16-200732.avif",
  alt: "Алимханов Мирас",
},
{
  name: "Абдрахан Сагдиана",
  quote: "Бірге өткен әр сәт — өмір бойғы қазына.",
  image: "https://user14155.na.imgto.link/public/20260616/whatsapp-image-2026-06-16-at-20-12-13.avif",
  alt: "Абдрахан Сагдиана",
},
{
  name: "Ержанұлы Елдос",
  quote: "Бүгін біз түлекпіз, ертең ел үмітін ақтаймыз.",
  image: "https://user14155.na.imgto.link/public/20260616/whatsapp-image-2026-04-08-at-17-34-29.avif",
  alt: "Ержанұлы Елдос",
},
{
  name: "Ерік Самғар",
  quote: "Бұл кеш жүректерді жақындастыратын ең әдемі сәт.",
  image: "https://user14155.na.imgto.link/public/20260616/whatsapp-image-2026-06-16-at-20-19-27-4.avif",
  alt: "Ерік Самғар",
},
{
  name: "Жеңіспек Қымбат",
  quote: "Үмітіміз биік, тілегіміз ақ, жолымыз жарқын болсын.",
  image: "https://user14155.na.imgto.link/public/20260616/whatsapp-image-2026-06-16-at-20-41-20.avif",
  alt: "Жеңіспек Қымбат",
},
{
  name: "Мәулетхан Дана",
  quote: "Мектеп қабырғасындағы әр күн мәңгі есімізде қалады.",
  image: "https://user14155.na.imgto.link/public/20260616/whatsapp-image-2026-06-16-at-20-25-21.avif",
  alt: "Мәулетхан Дана",
},
{
  name: "Амангелді Саян",
  quote: "Біз бірге өстік, енді бірге биікке самғаймыз.",
  image: "https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/bfiqbijrjgln4pzamljf",
  alt: "Амангелді Саян",
},
{
  name: "Қанатбекұлы Айбек",
  quote: "Бұл мереке — біздің ортақ тарихымыздың ең жарық беті.",
  image: "https://www.imghippo.com/i/wwY8242uk.jpeg",
  alt: "Қанатбекұлы Айбек",
}
];

const cinematicMoments = [
  wholeClassStage.url,
  classmatesMountain1.url,
  classmatesDastarkhan3.url,
  graduatesFormalPortrait.url,
  classmatesGameNight.url,
  newImg.event1,
  newImg.event3,
  newImg.event4,
  newImg.portrait3,
];

const timelinePhrases = [
  "Біз бірге өстік.",
  "Біз бірге үйрендік.",
  "Біз бірге армандадық.",
  "Біз бірге болашаққа қадам басамыз.",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "2026 жылғы түлектерге арналған шақырту" },
      {
        name: "description",
        content:
          "11-сынып түлектерінің соңғы қоңырау және аттестат табыстау рәсіміне арналған премиум қазақ тіліндегі ресми шақырту сайты.",
      },
      { property: "og:title", content: "2026 жылғы түлектерге арналған шақырту" },
      {
        property: "og:description",
        content:
          "Қазақ тіліндегі әсерлі шақырту: фотогалерея, түлектер бөлімі, естеліктер және мерекелік кешке кері санау.",
      },
      { property: "og:image", content: wholeClassStage.url },
      { name: "twitter:image", content: wholeClassStage.url },
    ],
  }),
  component: InvitationPage,
});

function InvitationPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [memoryIndex, setMemoryIndex] = useState(0);
  const [selectedGraduate, setSelectedGraduate] = useState<(typeof graduates)[number] | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<(typeof memoryGallery)[number] | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const invitationRef = useRef<HTMLElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 5400);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMemoryIndex((current) => (current + 1) % cinematicMoments.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const countdown = useCountdown(eventDate);

  const scrollToInvitation = () => {
    invitationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioEnabled) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setAudioEnabled((v) => !v);
  };

  return (
    <main className="relative isolate overflow-hidden">
      {/* Background music */}
      <audio
        ref={audioRef}
        src="/music/Timbaland_-_Apologize_47972715.mp3"
        loop
        preload="none"
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_oklch(0.78_0.12_85_/_0.08),_transparent_28%),radial-gradient(circle_at_20%_30%,_oklch(0.55_0.09_250_/_0.18),_transparent_22%)]" />

      {/* Audio toggle button */}
      <button
        type="button"
        onClick={toggleAudio}
        className="glass-panel shimmer-border fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-foreground transition-transform duration-300 hover:-translate-y-0.5 md:right-8 md:top-8"
        aria-label={audioEnabled ? "Музыканы өшіру" : "Музыканы қосу"}
      >
        {audioEnabled ? (
          <Volume2 className="h-4 w-4 text-gold" />
        ) : (
          <VolumeX className="h-4 w-4 text-gold" />
        )}
        <span>{audioEnabled ? "Музыка қосулы" : "Музыканы қосу"}</span>
      </button>

      {/* Hero section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.src}
              className={cn(
                "absolute inset-0 transition-all duration-[2200ms] ease-out",
                index === heroIndex
                  ? "opacity-100 scale-100"
                  : "pointer-events-none opacity-0 scale-110",
              )}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className={cn(
                  "h-full w-full object-cover object-center transition-transform duration-[7000ms] ease-out",
                  index === heroIndex ? "scale-[1.08]" : "scale-[1.15]",
                )}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-hero-overlay" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_oklch(0.08_0.012_255_/_0.55)_100%)]" />
            </div>
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,oklch(0.11_0.016_255_/_0.65)_100%)]" />
          <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_20%,oklch(0.8_0.12_85_/_0.22),transparent_0_26%),radial-gradient(circle_at_80%_40%,oklch(0.7_0.08_240_/_0.22),transparent_0_22%)]" />
        </div>

        <div className="container-shell relative flex min-h-screen items-center justify-center py-20">
          <div className="max-w-4xl text-center md:text-left">
            <div className="mb-6 md:mb-8 mx-auto md:mx-0 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-glass px-4 py-2.5 md:px-5 md:py-3 text-[0.65rem] md:text-sm tracking-[0.2em] md:tracking-[0.24em] text-gold uppercase backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4" />
              11-СЫНЫП ТҮЛЕКТЕРІНЕ АРНАЛҒАН РЕСМИ ШАҚЫРТУ
            </div>
            <h1 className="font-display header-xl font-semibold text-foreground">
              2026 ЖЫЛҒЫ <span className="gold-text">ТҮЛЕКТЕР</span>
            </h1>
            <p className="mt-4 md:mt-6 mx-auto md:mx-0 max-w-3xl header-md font-medium text-gold-soft text-balance">
              СОҢҒЫ ҚОҢЫРАУ ЖӘНЕ АТТЕСТАТ ТАБЫСТАУ РӘСІМІ
            </p>
            <p className="mt-6 md:mt-8 mx-auto md:mx-0 max-w-2xl body-md text-foreground/88">
              Құрметті ата-аналар, ұстаздар және қонақтар! Сіздерді біздің өміріміздегі ең маңызды
              мерекелердің біріне шақырамыз.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center md:justify-start">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToInvitation}
                className="group w-full sm:w-auto"
              >
                ШАҚЫРТУДЫ АШУ
                <Stars className="transition-transform duration-300 group-hover:rotate-12" />
              </Button>
              <button
                type="button"
                onClick={toggleAudio}
                className="glass-panel inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm text-muted-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {audioEnabled ? (
                  <Pause className="h-4 w-4 text-gold" />
                ) : (
                  <Play className="h-4 w-4 text-gold" />
                )}
                <span className="text-foreground/70">
                  {audioEnabled ? "Тоқтату" : "Музыка тыңдау"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Invitation */}
      <section ref={invitationRef} id="shaqyrtu" className="container-shell relative py-20 md:py-28">
        <SectionHeading
          eyebrow="1-БӨЛІМ"
          title="Салтанатты шақырту"
          description="Осы күн біз үшін тек мереке емес, балалық шақтан болашаққа өтетін ең қымбат сәттердің бірі."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 max-w-4xl mx-auto mt-10">
          <div className="glass-panel shimmer-border rounded-[2rem] p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <CalendarDays className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest text-foreground/50 uppercase mb-1">КҮНІ</p>
              <p className="text-xl font-display text-foreground">17.06.2026</p>
            </div>
          </div>

          <div className="glass-panel shimmer-border rounded-[2rem] p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Clock3 className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest text-foreground/50 uppercase mb-1">УАҚЫТЫ</p>
              <p className="text-xl font-display text-foreground">15:00</p>
            </div>
          </div>

          <div className="glass-panel shimmer-border rounded-[2rem] p-6 flex gap-4 items-start col-span-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <MapPinned className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest text-foreground/50 uppercase mb-1">ӨТЕТІН ОРНЫ</p>
              <p className="text-base font-display text-foreground leading-snug">
                Омар Молдағожин атындағы орта мектебінің актовый залы
              </p>
            </div>
          </div>

          <div className="glass-panel shimmer-border rounded-[2rem] p-6 flex gap-4 items-start col-span-2 lg:col-span-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <GraduationCap className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest text-foreground/50 uppercase mb-1">ІС-ШАРА</p>
              <p className="text-base font-display text-foreground">11 сынып аттестат алу рәсімі</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Gallery */}
      <section className="container-shell py-20 md:py-28">
        <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
          {memoryGallery.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setSelectedGalleryImage(image)}
              className={cn(
                "group relative mb-5 block w-full overflow-hidden rounded-[1.5rem] text-left transition-transform duration-300 hover:-translate-y-1",
                image.size === "tall"
                  ? "aspect-[4/5]"
                  : image.size === "wide"
                    ? "aspect-[16/10]"
                    : "aspect-[4/3]",
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Section 3 — Graduates */}
      <section className="container-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="3-БӨЛІМ"
          title="Біздің түлектер"
          description="Әрқайсысы — сынып тарихының ерекше бөлігі, болашаққа қанат қаққан жас түлек."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {graduates.map((graduate, index) => (
            <button
              key={`${graduate.name}-${index}`}
              type="button"
              onClick={() => setSelectedGraduate(graduate)}
              className="glass-panel group shimmer-border text-left rounded-[1.5rem] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_oklch(0.78_0.12_85_/_0.15)]"
            >
              <div className="overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-gold/10 to-blue-900/30">
                {graduate.image ? (
                  <img
                    src={graduate.image}
                    alt={graduate.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-3 h-12 w-12 rounded-full border border-gold/30 bg-gold/5 p-3">
                        <ImageIcon className="h-full w-full text-gold/50" />
                      </div>
                      <p className="text-xs text-gold/40">Сурет қойылмаған</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <p className="font-display text-2xl leading-tight text-foreground">{graduate.name}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">{graduate.quote}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Section 4 — Class teacher */}
      <section className="container-shell py-20 md:py-28">
        <div className="flex justify-center">
          <div className="text-center md:text-left max-w-2xl w-full">
            <SectionHeading
              eyebrow="4-БӨЛІМ"
              title="Сынып жетекшісі"
              description="Ұстаздың жүрекжарды сөзі — түлектерге бағыт беретін ең қымбат аманат."
              align="center"
            />
            <div className="glass-panel shimmer-border rounded-[2rem] p-6 md:p-8 text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl text-foreground">
                Ишбекпаева Алмагул <br /> Айдос Матрос
              </p>
              <p className="mt-2 text-base md:text-lg text-gold-soft">Сынып жетекшісі</p>
              <div className="mt-6 border-l-0 md:border-l border-gold/40 pl-0 md:pl-5 text-base leading-7 md:leading-8 text-foreground/85">
                Қымбатты түлектерім, алдарыңыздан ашылатын әрбір есік жақсылыққа бастасын. Білім мен
                тәрбие жолында алған құндылықтарыңыз сіздерді биік белестерге жеткізсін. Әрқашан
                жүректеріңізде адамдық, еңбекқорлық және туған мектебіңізге деген сағыныш сақталсын.
              </div>
              <div className="mt-6 flex items-center justify-center md:justify-start gap-3 text-sm text-muted-foreground">
                <Mic2 className="h-4 w-4 text-gold shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Cinematic memories */}
      <section className="relative py-20 md:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="5-БӨЛІМ"
            title="Естеліктер бейнесі"
            description="Бұл бөлім — кештің эмоциялық шарықтау сәті. Фотолар бірінен соң бірі кино кадрындай ағылады."
          />
        </div>
        <div className="container-shell relative overflow-hidden rounded-2xl md:rounded-[2rem]">
          <div className="relative h-[60vh] min-h-[420px] overflow-hidden rounded-[2rem] border border-border">
            {cinematicMoments.map((src, index) => (
              <div
                key={src}
                className={cn(
                  "absolute inset-0 transition-all duration-[1800ms] ease-out",
                  index === memoryIndex ? "opacity-100 scale-100" : "opacity-0 scale-110",
                )}
              >
                <img
                  src={src}
                  alt="Түлектердің әсерлі естелік фотосы"
                  className={cn(
                    "h-full w-full object-cover transition-transform duration-[6500ms] ease-out",
                    index === memoryIndex ? "scale-[1.1]" : "scale-[1.16]",
                  )}
                  loading="lazy"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.08_0.012_255_/_0.08),oklch(0.08_0.012_255_/_0.72))]" />
            <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_25%_15%,oklch(0.82_0.11_85_/_0.28),transparent_0_22%),radial-gradient(circle_at_70%_50%,oklch(0.65_0.08_245_/_0.22),transparent_0_20%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-center md:text-left">
              <p className="font-display header-lg text-foreground text-balance">
                Естелік — жүректегі мәңгілік жарық
              </p>
              <p className="mt-4 mx-auto md:mx-0 max-w-2xl text-sm leading-7 text-foreground/80 md:text-base">
                Жылдар өтсе де, осы фотолардағы күлкі, достық және мектеп иісі бізді қайтадан бір сәтке
                сол күндерге алып барады.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Countdown */}
      <section className="container-shell py-20 md:py-28">
        <SectionHeading
          eyebrow="6-БӨЛІМ"
          title="Кері санау"
          description="Ең толқынысты кешке дейінгі әр сәт біз үшін ерекше."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <CountdownCard label="Күн" value={countdown.days} />
          <CountdownCard label="Сағат" value={countdown.hours} />
          <CountdownCard label="Минут" value={countdown.minutes} />
          <CountdownCard label="Секунд" value={countdown.seconds} />
        </div>
      </section>

      {/* Section 7 — Timeline phrases */}
      <section className="relative py-20 md:py-28">
        <div className="container-shell relative overflow-hidden rounded-2xl md:rounded-[2.25rem]">
          <img
            src={newImg.event1}
            alt="Сыныптың ортақ панорамалық фотосы"
            className="h-[60vh] md:h-[72vh] min-h-[380px] md:min-h-[520px] w-full rounded-2xl md:rounded-[2.25rem] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-2xl md:rounded-[2.25rem] bg-[linear-gradient(180deg,oklch(0.08_0.012_255_/_0.12),oklch(0.08_0.012_255_/_0.82))]" />
          <div className="absolute inset-0 flex items-end p-6 md:p-14">
            <div className="max-w-3xl space-y-3 md:space-y-4 text-center md:text-left">
              <p className="text-xs md:text-sm tracking-[0.3em] text-gold uppercase">7-БӨЛІМ</p>
              {timelinePhrases.map((phrase) => (
                <p
                  key={phrase}
                  className="font-display text-2xl md:text-5xl leading-tight text-foreground opacity-90"
                >
                  {phrase}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,oklch(0.82_0.11_85_/_0.16),transparent_0_18%),radial-gradient(circle_at_75%_25%,oklch(0.58_0.08_245_/_0.2),transparent_0_18%),linear-gradient(180deg,oklch(0.11_0.018_255),oklch(0.08_0.01_255))]" />
        <StarsField />
        <div className="container-shell text-center">
          <div className="glass-panel shimmer-border mx-auto max-w-4xl rounded-[2rem] px-5 py-10 md:px-10 md:py-16">
            <p className="font-display text-3xl md:text-6xl leading-tight text-foreground">
              Әр аяқталу — жаңа бастаманың алғашқы қадамы.
            </p>
            <p className="mt-5 md:mt-6 text-base md:text-2xl text-gold-soft">2026 жылғы түлектер</p>
            <p className="mt-4 text-sm md:text-lg leading-7 md:leading-8 text-foreground/82">
              Сіздерді мерекелік кеште күтеміз!
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 text-xs md:text-sm text-muted-foreground">
              <Music2 className="h-4 w-4 text-gold shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Graduate dialog */}
      <Dialog
        open={Boolean(selectedGraduate)}
        onOpenChange={(open) => !open && setSelectedGraduate(null)}
      >
        <DialogContent className="glass-panel max-w-3xl overflow-hidden border-border p-0 text-foreground">
          {selectedGraduate ? (
            <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
              <img
                src={selectedGraduate.image}
                alt={selectedGraduate.alt}
                className="h-full min-h-[320px] w-full object-cover"
              />
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="font-display text-4xl text-foreground">
                    {selectedGraduate.name}
                  </DialogTitle>
                  <DialogDescription className="text-gold-soft">2026 жылғы түлек</DialogDescription>
                </DialogHeader>
                <div className="mt-6 rounded-[1.2rem] border border-border bg-glass px-5 py-5 text-base leading-8 text-foreground/85">
                  <Quote className="mb-4 h-5 w-5 text-gold" />
                  {selectedGraduate.quote}
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      {/* Gallery image dialog */}
      <Dialog
        open={Boolean(selectedGalleryImage)}
        onOpenChange={(open) => !open && setSelectedGalleryImage(null)}
      >
        <DialogContent className="glass-panel max-w-5xl overflow-hidden border-border p-0 text-foreground">
          {selectedGalleryImage ? (
            <div className="overflow-hidden rounded-[1.6rem]">
              <img
                src={selectedGalleryImage.src}
                alt={selectedGalleryImage.alt}
                className="max-h-[80vh] w-full object-contain bg-background/50"
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-2xl mx-auto md:mx-0 text-center md:text-left",
      )}
    >
      <p className="text-xs md:text-sm tracking-[0.3em] text-gold uppercase">{eyebrow}</p>
      <h2 className="section-title mt-3 md:mt-4 text-foreground">{title}</h2>
      <p className="body-copy mt-4 md:mt-5">{description}</p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-glass p-5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 text-center">
      <div className="mb-4 mx-auto inline-flex rounded-full border border-gold/25 bg-background/25 p-3 text-gold">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
      <p className="mt-3 text-base md:text-lg leading-7 md:leading-8 font-semibold text-foreground">{value}</p>
    </div>
  );
}

function CountdownCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="glass-panel shimmer-border rounded-[1.5rem] md:rounded-[1.8rem] p-5 md:p-6 text-center">
      <div className="font-display text-4xl md:text-6xl text-foreground">{String(value).padStart(2, "0")}</div>
      <div className="mt-2 md:mt-3 text-[0.6rem] md:text-sm uppercase tracking-[0.25em] text-gold-soft">{label}</div>
    </div>
  );
}

function StarsField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 19) % 100}%`,
        size: `${(index % 3) + 2}px`,
        delay: `${(index % 7) * 0.6}s`,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-gold opacity-60 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            boxShadow: "0 0 18px oklch(0.82 0.11 85 / 0.7)",
          }}
        />
      ))}
    </div>
  );
}

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => getCountdown(targetDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getCountdown(targetDate));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function getCountdown(targetDate: Date) {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
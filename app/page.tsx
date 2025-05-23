import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/eduway-logo.png"
            alt="Eduway Logo"
            width={120}
            height={30}
            className="size-20"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="text-black hover:text-[#4050fc] text-base font-medium"
          >
            Kasb
          </Link>
          <Link
            href="#"
            className="text-black hover:text-[#4050fc] text-base font-medium"
          >
            Hunar
          </Link>
          <Link
            href="#"
            className="text-black hover:text-[#4050fc] text-base font-medium"
          >
            Test
          </Link>
          <Link
            href="#"
            className="text-black hover:text-[#4050fc] text-base font-medium"
          >
            Biz haqimizda
          </Link>
        </nav>
        <div className="flex items-center space-x-6">
          <Link
            href="#"
            className="text-[#4050fc] hover:text-[#4050fc]/90 text-sm font-medium"
          >
            Kirish
          </Link>
          <Link
            href="#"
            className="bg-[#4050fc] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4050fc]/90"
          >
            Ro'yxatdan o'tish
          </Link>
        </div>
      </header>

      {/* Logo and Tagline */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="flex justify-center items-center mb-2">
          <Image
            src="/images/eduway-logo.png"
            alt="Eduway"
            width={400}
            height={100}
            className="h-[520px] w-auto"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-[#f8f8ff] rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">
              Qaysi <span className="text-[#4050fc]">Talant</span> egasisiz ?
            </h2>
            <p className="text-gray-600 mt-2">
              Test topshirish orqali buni aniqlab oling!
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image
              src="/images/talent-illustration.png"
              alt="Talent illustrations showing music, reading, and art"
              width={600}
              height={240}
              className="w-full rounded-lg"
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href="#"
              className="bg-[#4050fc] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#4050fc]/90 inline-block"
            >
              Testga kirish
            </Link>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            <span className="text-[#4050fc]">"Kelajak yo'lingiz"</span> ni bugun
            tanlang
          </h2>
          <p className="text-gray-600 mt-2">O'zingizga mos kasbni toping</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Career Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/doctors.png"
              alt="Shifokor - Medical professionals"
              width={280}
              height={280}
              className="w-full h-48 object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#4050fc] mb-2">
                Shifokor
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/programmer.png"
              alt="Dasturchi - Software developer"
              width={280}
              height={280}
              className="w-full h-48 object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#4050fc] mb-2">
                Dasturchi
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/doctors.png"
              alt="Shifokor - Medical professionals"
              width={280}
              height={280}
              className="w-full h-48 object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#4050fc] mb-2">
                Shifokor
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/images/doctors.png"
              alt="Shifokor - Medical professionals"
              width={280}
              height={280}
              className="w-full h-48 object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#4050fc] mb-2">
                Shifokor
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#00a9b4] text-white rounded-lg p-8">
            <div className="flex flex-col gap-5 mb-4">
              <Image
                src="/images/course.png"
                alt="Kurslar"
                width={96}
                height={96}
              />
              <h3 className="text-2xl font-bold">Kurslar</h3>
            </div>
            <p className="mb-6">
              Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Excepturi
              Assumenda Incidunt, Praesentium Quisquam.
            </p>
            <Link
              href="#"
              className="block text-center py-3 border border-white rounded-full hover:bg-white/10 transition"
            >
              50 ta kurs
            </Link>
          </div>

          <div className="bg-[#091621] text-white rounded-lg p-8">
            <div className="flex flex-col gap-5 mb-4">
              <Image
                src={"/images/job.png"}
                alt="Kasblar"
                width={96}
                height={96}
              />
              <h3 className="text-2xl font-bold">Kasblar</h3>
            </div>
            <p className="mb-6">
              Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Excepturi
              Assumenda Incidunt, Praesentium Quisquam.
            </p>
            <Link
              href="#"
              className="block text-center py-3 border border-white rounded-full hover:bg-white/10 transition"
            >
              50 ta kasb
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f8ff] py-12 mt-12">
        <div className="container mx-auto px-4">
          {/* Footer content would go here */}
        </div>
      </footer>
    </div>
  );
}

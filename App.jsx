import React from 'react'
import React, { useState } from 'react'

import Home from './assets/home img.jpg'
import Seoul from './assets/seoul.jpg'
import Busan from './assets/2.busan.jpg'
import Incheon from './assets/3.incheon.jpg'
import Daegu from './assets/4.daegu.jpg'
import Daejon from './assets/5.daejon.jpg'
import Gwangju from './assets/6.gwangju.jpg'
import Ulsan from './assets/7.ulsan.jpg'
import Suwon from './assets/8.suwon.jpg'
import Changwon from './assets/9.changwon.jpg'
import Jeonju from './assets/10jeonju.jpg'
import Gyeongju from './assets/11geongju.jpg'
import Jeju from './assets/12.jeju.jpg'
import Kimchi from './assets/kimchi.jpg'
import Hanbok from './assets/hanbok.jpg'
import Arirang from './assets/arirang.jpg'
import Family from './assets/family.jpg'
import Education from './assets/education.jpg'
import Life from './assets/life.jpg'
import Map from './assets/map.svg'

 export const App = () => {
  const [search, setSearch] = useState('')
  const [selectedCity, setSelectedCity] = useState(null)

  const cities = [
    {
      name: 'Seoul',
      image: Seoul,
      description:
        'South Koreas capital, famous for historic palaces, modern buildings, shopping, and culture.',
    },
    {
      name: 'Busan',
      image: Busan,
      description:
        'A major port city known for Haeundae Beach, seafood, and Gamcheon Culture Village.',
    },
    {name: 'Incheon',
      image: Incheon,
      description:
        'A coastal city near Seoul, known for its international airport and modern districts.',
    },
    {
      name: 'Daegu',
      image: Daegu,
      description:
        'A major city known for fashion, local markets, and its warm summers.',
    },
    {
      name: 'Daejeon',
      image: Daejon,
      description:
        'A central city known for science, research, and transport connections.',
    },
    {
      name: 'Gwangju',
      image: Gwangju,
      description:
        'A city recognized for its art, culture, and democratic history.',
    },
    {
      name: 'Ulsan',
      image: Ulsan,
      description:
        'An industrial city known for automobile manufacturing and shipbuilding.',
    },
    {
      name: 'Suwon',
      image: Suwon,
      description:
        'A city famous for Hwaseong Fortress and its historic architecture.',
    },
    {
      name: 'Changwon',
      image: Changwon,
      description:
        'A planned city and important industrial center in southeastern Korea.',
    },
    {
      name: 'Jeonju',
      image: Jeonju,
      description:
        'Known for its traditional Hanok Village and famous bibimbap cuisine.',
    },
    {
      name: 'Gyeongju',
      image: Gyeongju,
      description:
        'A historic city with ancient Silla heritage, temples, and archaeological sites.',
    },
    {
      name: 'Jeju',
      image: Jeju,
      description:
        'A volcanic island famous for its natural scenery, caves, and waterfalls.',
    },
  ]

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  )

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  return (
    <>
      <header
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Home})` }}>
      <div className="flex items-center justify-between px-12 py-8">
        <p className="text-4xl font-bold text-white">Travel to Korea</p>
        <nav>
          <ul className="flex items-center gap-12">
            <li> <a href=""className="border-b-2 border-white pb-2 text-lg font-medium text-white"> Home</a></li>
            <li><a href="#cities" className="text-lg font-medium text-white transition hover:text-gray-300">Cities</a></li>
            <li><a href="#traditions" className="text-lg font-medium text-white transition hover:text-gray-300">Traditions</a></li>
            <li><a href="#societies"className="text-lg font-medium text-white transition hover:text-gray-300">Societies</a></li>
          </ul>
        </nav>
        </div>
        <h1 className='object-center text-gray-800 font-bold w-[500px] pt-[200px] pl-[48px] h-[72px]'>Janubiy Koreya– Sharqiy Osiyoda, Koreya yarimorolining janubiy qismida joylashgan dunyoning eng rivojlangan va zamonaviy davlatlaridan biridir.</h1>
    </header>
      <main className=''>
        <h1 className='font-bold text-[30px]' id="cities">Cities</h1>
        <section>
          <div className='w-[350px]h-[450px] grid grid-cols-3 gap-4'>

            <div >
              <img className='w-[350px] h-[450px] object-cover' src={Seoul} alt="Seoul" />
             <div className='w-[350px]'>
              <p className='font-bold text-center'>Poytaxt, ~10 mln (aglomeratsiyada ~23 mln).Mamlakatning siyosiy, iqtisodiy va madaniy markazi.Tarixiy saroylar (masalan, Gyeongbokgung) va zamonaviy Gangnam tumani bir joyda.</p>
              </div>
              <h2 className=' text-pink-400 text-[24px]'>Seoul</h2>
            </div>

            <div>
              <img className='w-[390px] h-[450px]' src={Busan} alt="Busan" />
              <div className='w-[350px]'>
              <p className='font-bold text-center'>2-yirik shahar, ~3.4 mln. Mamlakatning eng katta port shahri.Plyajlari (Haeundae), Gamcheon madaniyat qishlog'i va xalqaro kinofestivali (BIFF) bilan mashhur.</p>
              </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Busan</h2>
            </div>

            <div>
              <img className='w-[390px] h-[450px] ' src={Incheon} alt="Incheon" />
            <div className='w-[350px]'>
              <p className='font-bold text-center'>3-yirik shahar, ~2.9 mln. Seoul yaqinidagi muhim port va xalqaro aeroport joylashgan shahar. Zamonaviy madaniyat va savdo markazi.</p>
              </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Incheon</h2>
            </div>

            <div>
              <img className='w-[350px] h-[450px]' src={Daegu} alt="Daegu" />
              <div className='w-[350px]'>
              <p className='font-bold text-center'> 4-yirik shahar, ~2.4 mln. An'anaviy ravishda "Koreyaning moda poytaxti" deb ataladi. Yirik talabalar aholisiga ega va do'stona muhiti bilan ajralib turadi.</p>
              </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Daegu</h2>
            </div>

            <div>
              <img className='w-[350px] h-[450px]' src={Daejon} alt="Daejeon" />
              <div className='w-[350px]'>
              <p className='font-bold text-center'>5-yirik shahar, ~1.5 mln. Mamlakatning markazida joylashgan muhim transport va tadqiqot markazi. Ko'plab bog'lar va ilmiy muassasalarga ega.</p>
            </div>
              <h2 className=' text-pink-400  pt-[30px] text-[24px]'>Daejeon</h2>
            </div>

            <div>
              <img className='w-[350px] h-[450px]' src={Gwangju} alt="Gwangju" />
             <div className='w-[350px]'>
             <p className='font-bold text-center'>6-yirik shahar, ~1.5 mln. Koreyaning zamonaviy demokratik harakati beshigi. San'at va madaniyat festivallari bilanmashhur.</p>
              </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Gwangju</h2>
            </div>

            <div>
              <img className='w-[350px] h-[450px]' src={Ulsan} alt="Ulsan" />
              <div className='w-[350px]'>
              <p className='font-bold text-center'>7-yirik shahar, ~1.1 mln. Mamlakatning sanoat markazi,xususan avtomobilsozlik va kemasozlikda yetakchi.Shahar chekkasida kit kuzatish imkoniyati bor.</p>
              </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Ulsan</h2>
            </div>

            <div>
              <img className='w-[390px] h-[450px]' src={Suwon} alt="Suwon" />
             <div className='w-[350px]'>
              <p className='font-bold text-center'>~1.2 mln. Gyeonggi provinsiyasining ma'muriy markazi.Tarixiy Hwaseong qal'asi (UNESCO ro'yxatiga kiritilgan)bilan mashhur.</p>
             </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Suwon</h2>
            </div>

            <div>
              <img className='w-[350px] h-[450px]' src={Changwon} alt="Changwon" />
              <div className='w-[350px]'>
              <p className='font-bold text-center'>~1 mln. Gyeongsangnam provinsiyasining markazi.Mashinasozlik va og'ir sanoatning yirik markazi.</p>
              </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Changwon</h2>
            </div>

            <div>
              <img className='w-[350px] h-[450px]' src={Jeonju} alt="Jeonju" />
              <div className='w-[350px]'>
              <p className='font-bold text-center'>~640,000. Koreya madaniyati va bibimbap taomining vatani hisoblanadi. An'anaviy Hanok qishlog'i (an'anaviy uylar)bilan mashhur.</p>
              </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Jeonju</h2>
            </div>

            <div>
              <img className='w-[350px] h-[450px]' src={Gyeongju} alt="Gyeongju" />
             <div className='w-[350px]'>
              <p className='font-bold text-center'>~260,000. "Devorsiz muzey" deb ataladi. Qadimgi Sill qirolligining poytaxti bo'lgan. Ko'plab tarixiy qabirlar,ibodatxonalar va Bulguksa ibodatxonasi (UNESCO) joylashgan.</p>
              </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Gyeongju</h2>
            </div>

            <div>
              <img className='w-[350px] h-[450px]' src={Jeju} alt="Jeju" />
              <div className='w-[350px]'>
              <p className='font-bold' text-center>
                ~490,000 (shahar). Jeju orolining markazi. Vulqon kelib
                chiqishiga ega orol. Tabiiy go'zalligi (sharsharalar,
                g'orlar) va Seongsan Ilchulbong cho'qqisi bilan mashhur.
              </p>
              </div>
              <h2 className=' text-pink-400 pt-[30px] text-[24px]'>Jeju</h2>
            </div>
          </div>
        </section>

        <h1 className='font-bold text-[35px]' id="traditions">Traditions</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div >
            <img className='w-[380px] h-[400px] ' src={Hanbok} alt="Hanbok" />
            <div>
            <p className='font-bold  w-[380px] h-[200px] text-center text-[12px]'>
              Hanbok — Koreyaning an'anaviy milliy kiyimi bo'lib, yorqin
              ranglar va nafis naqshlar bilan bezatilgan. Ayollar uchun
              an'anaviy hanbok jeogori (qisqa ko'ylagi) va chima (uzun
              yubka)dan iborat. Erkaklar esa jeogori va baji (keng shim)
              kiyishadi. Hanbok odatda Chuseok (hosil bayrami), Seollal
              (Koreya Yangi yili), to'ylar va turli tantanalarda kiyiladi.
              Qiziqarli jihati shundaki, Seouldagi tarixiy saroylarga
              (masalan, Gyeongbokgung) hanbok kiyib kirsangiz, kirish
              bepul. Bu an'ana hanbokni yoshlar orasida yanada
              ommalashtirgan.
            </p>
            </div>
            <h2 className=' text-pink-400 text-[24px] pt-[20px]'>Hanbok</h2>
          </div>

          <div>
            <img className='w-[400px] h-[400px] ' src={Arirang} alt="Arirang" />
           
           <div>
            <p className='font-bold w-[400px] h-[220px] text-center text-[12px]'>
              Arirang — Koreyaning eng mashhur xalq qo'shig'i bo'lib,
              "mening sevgilim" yoki "tepali yo'l" ma'nosini bildiradi.
              Bu qo'shiq 600 yildan ortiq tarixga ega va Joseon davridan
              boshlab kuylanadi. Arirangning bir nechta turlari mavjud:
              Jeongseon Arirang (Gangwon provinsiyasi), Jindo Arirang
              (Jeolla provinsiyasi) va Miryang Arirang (Gyeongsang
              provinsiyasi). 1926-yilda Arirang birinchi marta ovoz
              yozilgan. 2012-yilda UNESCOning nomoddiy madaniy merosi
              ro'yxatiga kiritilgan. Qiziqarli jihati shundaki,
              Arirangning 3000 dan ortiq varianti mavjud — har bir
              viloyatda o'z uslubi bor. Qo'shiq sevgi, ayriliq va
              sog'inch haqida bo'lib, an'anaviy cholg'ular (gayageum,
              daegeum, janggu, buk) bilan ijro etiladi.
            </p>
            </div>
            <h2 className=' text-pink-400 text-[24px] '>Arirang Song</h2>
          </div>

          <div className='w-[400px] h-[350px]'>
            <img className='w-[400px] h-[400px]' src={Kimchi} alt="Kimchi" />
            <div>
            <p className='font-bold w-[400px] h-[180px] text-center text-[12px]'>
              Kimchi — Koreyaning milliy taomi bo'lib, achitilgan
              sabzavotlardan tayyorlanadi. Har yili kuzda oilalar
              birgalikda qish uchun kimchi tayyorlaydi. Bu an'ana
              Kimjang (김장) deb ataladi. Asosiy masalliqlar orasida
              napa karam (baechu), qizil qalampir kukuni (gochugaru),
              sarimsoq, zanjabil, baliq sousi va tuz bor. Kimjang
              an'anasi 2013-yilda UNESCOning nomoddiy madaniy merosi
              ro'yxatiga kiritilgan. Bir oila qishda 100 dan 300 tagacha
              karam tayyorlashi mumkin — bu bir yilga yetadi.
              Kimchining 200 dan ortiq turi mavjud bo'lib, u
              probiotiklarga boy va immunitetni oshiradi.
            </p>
            </div>
            <h2 className=' text-pink-400 text-[24px] pt-[40px]'>Kimchi</h2>
          </div>
        </div>
        <h1 className='font-bold text-[35px] ' id="societies">Societies</h1>
        <div className="grid grid-cols-3 gap-4">
          <div >
            <img className='w-[380px] h-[450px]' src={Family} alt="Family" />
            <div>
            <p className='font-bold w-[380px] h-[220px] text-[12px] text-center pt-[10px]'>
              Janubiy Koreyada oila jamiyatning asosi hisoblanadi.
              An'anaviy koreys oilasi konfutsiylik ta'sirida shakllangan
              bo'lib, unda kattalarga hurmat, ota-onaga itoat va oilaviy
              birlik eng muhim qadriyatlar sanaladi. Oilada eng katta
              o'g'il ota-onasini qarigan chog'ida boqish mas'uliyatini
              oladi. Biroq bugungi kunda zamonaviy Koreyada bu an'analar
              asta-sekin o'zgarmoqda — yosh avlod mustaqil hayotga
              intilmoqda, ayollar esa karyera qurishga ko'proq e'tibor
              bermoqda. Shunga qaramay, Seollal va Chuseok kabi
              bayramlarda butun oila yig'ilib, ajdodlarga hurmat
              ko'rsatish an'anasi saqlanib qolgan. Koreys jamiyatida
              "uri" (biz) tushunchasi "na" (men) dan ustun turadi — bu
              jamoaviy ongning yorqin ifodasidir.
            </p>
            </div>
            <h2 className=' text-pink-400 text-[24px] pt-[40px]'>Family and social values</h2>
          </div>

          <div>
            <img className='w-[400px] h-[450px]' src={Education} alt="Education" />
            <div>
            <p className='font-bold w-[380px] h-[220px] text-[12px] text-center pt-[10px]'>
              Janubiy Koreya dunyodagi eng qattiq ta'lim tizimlaridan
              biriga ega. Maktab o'quvchilari kuniga 10-12 soat dars
              o'qiydi, ko'plab o'quvchilar esa maktabdan keyin hagwon
              (xususiy repetitorlik markazlari)ga boradi. Koreyada
              "SKY" deb ataladigan uchta eng nufuzli universitet —
              Seoul National University, Korea University va Yonsei
              Universityga kirish juda katta raqobatni talab qiladi.
              Bu bosim natijasida o'quvchilar orasida stress va
              charchoq keng tarqalgan. Mehnat madaniyatida ham shunga
              o'xshash holat kuzatiladi: koreyslar ish joyida juda
              ko'p vaqt o'tkazadi, "hwaiting" (harakat qilish) ruhi
              kuchli. So'nggi yillarda hukumat ish vaqti cheklovlarini
              joriy etib, work-life balanceni yaxshilashga harakat
              qilmoqda, lekin an'anaviy mehnatsevarlik ruhi hanuz
              saqlanib qolgan.
            </p>
            </div>
            <h2 className=' text-pink-400 text-[24px] pt-[40px]'>Education system and work culture</h2>
          </div>

          <div>
            <img className='w-[400px] h-[450px]' src={Life} alt="Life" />
           <div>
            <p className='font-bold w-[400px] h-[260px] text-[12px] pt-[10px] text-center'> Bugungi Janubiy Koreya jamiyati an'ana va zamonaviylik
              uyg'unligining yorqin namunasidir. Mamlakat K-pop,
              K-drama, K-beauty va K-food orqali butun dunyoga o'z
              madaniyatini tarqatmoqda — bu "Hallyu" (Koreya to'lqini)
              deb ataladi. Koreya jamiyati texnologiyaga juda bog'liq:
              dunyodagi eng tez internet, eng ilg'or smartfon madaniyati
              va kuchli gaming industriyasi shu yerda shakllangan.
              Shu bilan birga, jamiyatda ayrim muammolar ham mavjud:
              aholi sonining kamayishi (dunyodagi eng past tug'ilish
              ko'rsatkichlaridan biri), yolg'izlik va uy-joy
              narxlarining yuqoriligi yoshlar hayotiga ta'sir qilmoqda.
              Shunga qaramay, Koreya jamiyati o'zgarishlarga tez
              moslashib, global miqyosda o'z o'rnini mustahkamlab
              bormoqda. Koreyslar jeong (정) — chuqur hissiy bog'liqlik
              va mehr tushunchasini jamiyatning eng muhim qadriyatlaridan
              biri deb biladi.</p>
              </div>
            <h2 className=' text-pink-400 text-[24px] pt-[5px]'>Modern Society and Global Impact</h2>
          </div>
        </div>
      </main>
      {/*  */}


      <footer className='w-[100%] bg-blue-300 text-white p-[70px 0 0]'>
        <div className='max-w-[1200px] p-[30px] avto flex items-center content-between gap-[60px]'>
          <div >
            <img className='w-[2000px] h-[400px]' src={Map} alt="" />
          </div>

       <div className='max-w-md '>
      <h3 className='mb-2 text-lg font-bold text-white '>Discover Korea</h3>
      <p className='max-w-sm text-base leading-7 text-gray-500'>Janubiy Koreyaning Go'zal Shaharlari, Madaniyati Va An'analarini Biz Bilan Birga Kashf Eting.</p>
     </div>


     {/*  */}
     <div className='min-w-0'>
      <h4 className='font-bold text-white mb-2 text-lg'>Navigatsiya</h4>
      <ul className='w-[12px]  text-gray-500'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Cities</a></li>
        <li><a href="#">Traditions</a></li>
        <li><a href="#">Socities</a></li>
      </ul>
      <div className="mt-4 flex max-w-md gap-2">
        <button className="rounded-lg bg-gray-400 px-5 py-2 font-medium text-white transition hover:bg-gray-500 h-[35px] pl-[20px] "> Submit</button>
      </div>
    </div>

  </div>

  {/* <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} lassName="mx-auto mt-10 block rounded-lg bg-gray-400 px-5 py-2 text-white hover:bg-gray-500">Back to begin</button> */}
       </footer>
    </>
  )
}

export default App
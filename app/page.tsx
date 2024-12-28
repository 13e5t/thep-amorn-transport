"use client"
import React, { useEffect, useState } from 'react';
import { Truck, Phone, Mail, Clock, MapPin, Star } from 'lucide-react';

const TruckingWebsite = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // ตรวจสอบว่าเป็น mobile device หรือไม่
  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'iphone', 'ipad', 'mobile'];
      return mobileKeywords.some(keyword => userAgent.includes(keyword));
    };
    
    setIsMobile(checkIsMobile());
  }, []);

  const handleContact = () => {
    if (isMobile) {
      window.location.href = 'tel:0949475353';
    } else {
      window.location.href = 'mailto:thep-amorn-transport@gmail.com';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Truck size={64} className="mb-6" />
            <h1 className="text-4xl font-bold mb-2">หจก. เทพอมร ทรานสปอร์ต</h1>
            <h2 className="text-2xl mb-4">บริการขนส่งสินค้าทั่วประเทศ</h2>
            <p className="text-xl mb-8">บริการรวดเร็ว ปลอดภัย ไว้วางใจได้</p>
            <button 
              onClick={handleContact}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
            >
              {isMobile ? 'โทรหาเรา' : 'ส่งอีเมล'}
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">บริการของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Truck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">ขนส่งสินค้าทั่วไป</h3>
              <p className="text-gray-600">รับขนส่งสินค้าทุกประเภท ด้วยรถบรรทุกที่ได้มาตรฐาน</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">ตรงต่อเวลา</h3>
              <p className="text-gray-600">จัดส่งตรงเวลา ติดตามสถานะได้ตลอด 24 ชั่วโมง</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">บริการมืออาชีพ</h3>
              <p className="text-gray-600">ทีมงานมืออาชีพ พร้อมให้คำปรึกษาตลอดการขนส่ง</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">ติดต่อเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Phone className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">โทรศัพท์</h3>
                <p className="text-gray-600">094-947-5353</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">อีเมล</h3>
                <p className="text-gray-600">thep-amorn-transport@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">ที่อยู่</h3>
                <p className="text-gray-600">กรุงเทพมหานคร ประเทศไทย</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 หจก. เทพอมร ทรานสปอร์ต. สงวนลิขสิทธิ์</p>
        </div>
      </footer>
    </div>
  );
};

export default TruckingWebsite;
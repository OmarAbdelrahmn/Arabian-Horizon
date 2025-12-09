import logo from "@/assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="شعار الجمعية" className="h-16 w-auto opacity-90" />
              <div>
                <h3 className="text-xl font-bold">جمعية دعم النقل</h3>
                <p className="text-sm text-slate-400">والخدمات اللوجستية الأهلية</p>
              </div>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              جمعية أهلية تسعى لتعزيز ودعم قطاع النقل والخدمات اللوجستية في المملكة، والمساهمة في تحقيق التنمية المستدامة.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">روابط سريعة</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#hero" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">عن الجمعية</a></li>
              <li><a href="#strategy" className="hover:text-white transition-colors">التوجه الاستراتيجي</a></li>
              <li><a href="#stakeholders" className="hover:text-white transition-colors">أصحاب المصلحة</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">تواصل معنا</h4>
            <ul className="space-y-4 text-slate-400">
              <li>جدة، المملكة العربية السعودية</li>
              <li>info@natls.info</li>
              <li>566432100 966+</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} جمعية دعم النقل والخدمات اللوجستية الأهلية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

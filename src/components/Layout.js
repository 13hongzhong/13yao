import React from 'react';

const Layout = () => {
  return (
    <div className="container mx-auto my-5 p-3 rounded-lg border-2" style={{ borderColor: '#abd1e1', maxWidth: '1200px', backgroundColor: '#f3f4f6' }}>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-5/12 mb-3">
          {/* FOCAL IMAGE */}
          <div
            style={{
              backgroundImage: "url('https://f2.toyhou.se/file/f2-toyhou-se/images/75108968_XHJnFGLblspesP0.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '16px',
              minHeight: '450px',
            }}
            className="rounded-lg h-full"
          ></div>
        </div>
        <div className="w-full lg:w-5/12 px-3">
          {/* TITLE BLOCK */}
          <div className="relative py-3 mb-3 rounded-lg" style={{ backgroundColor: ' #c5e6f4' }}>
            <div className="text-white text-center py-3">
              <h1 className="text-3xl font-bold uppercase mb-1" style={{ letterSpacing: '2.5px' }}>
                Kagu ✿ 白板
              </h1>
              <p className="text-sm" style={{ letterSpacing: '1px' }}>
                illustrator • writer • developer
              </p>
            </div>
          </div>
          {/* ABOUT BLOCK */}
          <div className="p-3 bg-gray-100 mb-3 rounded-lg overflow-auto" style={{ height: '270px', lineHeight: '1.4' }}>
            <p>Write whatever you want here! this box will scroll when filled.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis eget risus eu fermentum. Sed leo mi, luctus vitae
              porttitor et, viverra ut lacus. Mauris bibendum, risus in efficitur dignissim, sapien enim pulvinar dui, a gravida elit
              lorem sit amet velit. Suspendisse et malesuada magna, mollis fringilla mauris. Cras sollicitudin eleifend tortor, et
              congue nulla finibus a. Suspendisse ullamcorper suscipit nulla at mattis. Vivamus commodo, magna ac pulvinar iaculis,
              lectus dui posuere elit, in finibus urna turpis eget arcu. Morbi auctor sapien non nulla vestibulum, eget malesuada leo
              condimentum. Integer blandit augue neque.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/12">
          <div className="h-full flex flex-col justify-between">
            {/* DECO IMAGES */}
            <div
              style={{
                backgroundImage: "url('https://f2.toyhou.se/file/f2-toyhou-se/images/17777845_Ja7J7dn53mMdWIX.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '150px',
                borderRadius: '16px',
              }}
              className="mb-3"
            ></div>
            <div
              style={{
                backgroundImage: "url('https://f2.toyhou.se/file/f2-toyhou-se/images/17787301_jsP3mNTAOubMBpC.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '150px',
                borderRadius: '16px',
              }}
              className="mb-3"
            ></div>
            <div
              style={{
                backgroundImage: "url('https://f2.toyhou.se/file/f2-toyhou-se/images/15630132_YmHZEO0ihSpSAHx.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '150px',
                borderRadius: '16px',
              }}
              className="mb-3"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

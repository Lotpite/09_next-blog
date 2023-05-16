import '@/styles/global.css'; // can be fail
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
    title: "next-blog",
    description: 'Write & Share Your Ideas'
}

const RootLayout = ({ children }) => {
  return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient'/>
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
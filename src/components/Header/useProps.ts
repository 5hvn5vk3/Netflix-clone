import { useEffect, useState } from 'react';

export const useProps = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        // ① scroll が100を超えたか判定
        const handleShow = () => {
            setShow(window.scrollY > 100);

        };

        // ② イベントリスナーの設定
        window.addEventListener('scroll', handleShow);
        
        
        return () => {
            window.removeEventListener('scroll', handleShow) // show の値が変わっても Header のスタイルが変わるだけなので、この removeEventlistner は show の変更とは無関係
            console.log("removeEventlistener") // クリーンアップ関数作動がわかるように // Viteでのプレビューでコンソールには1回しか表示されない（Strict Mode の機能によるもの）
        };
        
       
    }, []);
    return {
        show,
    };
};
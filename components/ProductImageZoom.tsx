'use client';

import { useRef, useState, type MouseEvent } from 'react';

type ZoomState = {
  lensLeft: number;
  lensTop: number;
  lensWidth: number;
  lensHeight: number;
  imageLeft: number;
  imageTop: number;
  imageWidth: number;
  imageHeight: number;
};

type ProductImageZoomProps = {
  src: string;
  alt: string;
  hint: string;
};

const ZOOM_FACTOR = 2.8;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ProductImageZoom({ src, alt, hint }: ProductImageZoomProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<ZoomState | null>(null);

  function updateZoom(event: MouseEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    const image = imageRef.current;
    if (!stage || !image || !image.naturalWidth || !image.naturalHeight) return;

    const stageRect = stage.getBoundingClientRect();
    const scale = Math.min(stageRect.width / image.naturalWidth, stageRect.height / image.naturalHeight);
    const renderedWidth = image.naturalWidth * scale;
    const renderedHeight = image.naturalHeight * scale;
    const objectLeft = (stageRect.width - renderedWidth) / 2;
    const objectTop = (stageRect.height - renderedHeight) / 2;
    const pointerX = event.clientX - stageRect.left - objectLeft;
    const pointerY = event.clientY - stageRect.top - objectTop;

    if (pointerX < 0 || pointerY < 0 || pointerX > renderedWidth || pointerY > renderedHeight) {
      setZoom(null);
      return;
    }

    const previewRect = previewRef.current?.getBoundingClientRect();
    const previewWidth = previewRect?.width || 420;
    const previewHeight = previewRect?.height || 420;
    const viewWidth = Math.min(previewWidth / ZOOM_FACTOR, renderedWidth);
    const viewHeight = Math.min(previewHeight / ZOOM_FACTOR, renderedHeight);
    const viewLeft = renderedWidth <= viewWidth ? 0 : clamp(pointerX - viewWidth / 2, 0, renderedWidth - viewWidth);
    const viewTop = renderedHeight <= viewHeight ? 0 : clamp(pointerY - viewHeight / 2, 0, renderedHeight - viewHeight);
    const scaledWidth = renderedWidth * ZOOM_FACTOR;
    const scaledHeight = renderedHeight * ZOOM_FACTOR;

    setZoom({
      lensLeft: objectLeft + viewLeft,
      lensTop: objectTop + viewTop,
      lensWidth: viewWidth,
      lensHeight: viewHeight,
      imageLeft: scaledWidth <= previewWidth ? (previewWidth - scaledWidth) / 2 : -viewLeft * ZOOM_FACTOR,
      imageTop: scaledHeight <= previewHeight ? (previewHeight - scaledHeight) / 2 : -viewTop * ZOOM_FACTOR,
      imageWidth: scaledWidth,
      imageHeight: scaledHeight,
    });
  }

  return (
    <div className="product-image-zoom">
      <div
        ref={stageRef}
        className="product-image-zoom-stage"
        onMouseMove={updateZoom}
        onMouseLeave={() => setZoom(null)}
      >
        <img ref={imageRef} src={src} alt={alt} draggable={false} decoding="async" fetchPriority="high" />
        <span className="product-image-zoom-hint">⌕ {hint}</span>
        {zoom && (
          <span
            className="product-image-zoom-lens"
            style={{ left: zoom.lensLeft, top: zoom.lensTop, width: zoom.lensWidth, height: zoom.lensHeight }}
            aria-hidden="true"
          />
        )}
      </div>
      <div ref={previewRef} className={`product-image-zoom-preview${zoom ? ' is-active' : ''}`} aria-hidden="true">
        {zoom && (
          <img
            src={src}
            alt=""
            draggable={false}
            loading="lazy"
            decoding="async"
            style={{
              left: zoom.imageLeft,
              top: zoom.imageTop,
              width: zoom.imageWidth,
              height: zoom.imageHeight,
            }}
          />
        )}
      </div>
    </div>
  );
}

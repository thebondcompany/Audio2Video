(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 218:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2345));


/***/ }),

/***/ 2345:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./src/components/InfoTooltip.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
function InfoTooltip(param) {
    let { label, children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        className: "relative inline-flex items-center group",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                "aria-label": label,
                className: "inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-[10px] font-semibold text-slate-700 shadow-sm group-hover:border-slate-400 group-hover:text-slate-900 transition-colors",
                children: "i"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                role: "tooltip",
                className: "pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 scale-95 transform rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 opacity-0 shadow-2xl ring-1 ring-black/5 backdrop-blur-md transition-all duration-150 group-hover:scale-100 group-hover:opacity-100",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/AudioUploader.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ACCEPTED_TYPES = [
    "audio/mpeg",
    "audio/mp3",
    "audio/wav",
    "audio/x-wav",
    "audio/mp4",
    "audio/x-m4a"
];
const ACCEPTED_EXTENSIONS = [
    ".mp3",
    ".wav",
    ".m4a"
];
function isAcceptedFile(file) {
    var _file_name;
    if (ACCEPTED_TYPES.includes(file.type)) return true;
    var _file_name_toLowerCase;
    const name = (_file_name_toLowerCase = (_file_name = file.name) === null || _file_name === void 0 ? void 0 : _file_name.toLowerCase()) !== null && _file_name_toLowerCase !== void 0 ? _file_name_toLowerCase : "";
    return ACCEPTED_EXTENSIONS.some((ext)=>name.endsWith(ext));
}
function AudioUploader(param) {
    let { onFileSelect, isProcessing, fileName } = param;
    const handleDrop = (0,react.useCallback)((e)=>{
        e.preventDefault();
        if (isProcessing) return;
        const file = e.dataTransfer.files[0];
        if (file && isAcceptedFile(file)) {
            onFileSelect(file);
        }
    }, [
        onFileSelect,
        isProcessing
    ]);
    const handleChange = (0,react.useCallback)((e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file && isAcceptedFile(file)) {
            onFileSelect(file);
        }
    }, [
        onFileSelect
    ]);
    const handleDragOver = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                onDrop: handleDrop,
                onDragOver: handleDragOver,
                className: "\n          flex flex-col items-center justify-center w-full min-h-[12rem] border border-dashed rounded-2xl\n          cursor-pointer transition-all duration-200 bg-white\n          ".concat(isProcessing ? "opacity-60 cursor-not-allowed border-slate-200" : "border-slate-300 hover:border-slate-400 hover:bg-slate-50 shadow-sm", "\n        "),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        type: "file",
                        accept: ".mp3,.wav,.m4a,audio/mpeg,audio/wav,audio/mp4",
                        onChange: handleChange,
                        disabled: isProcessing,
                        className: "hidden"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: "w-11 h-11 mb-3 text-slate-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.8,
                            d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-sm text-slate-900 mb-1 font-medium",
                        children: isProcessing ? "Processing…" : fileName ? "Replace audio or drop another file" : "Drop audio file here or click to choose"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-xs text-slate-500",
                        children: fileName ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "font-medium text-slate-700",
                            children: fileName
                        }) : "Optimized for MP3, WAV, or M4A"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2 text-[11px] text-slate-500",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                        label: "Recommended audio",
                        children: "Use a final mix (not raw microphone feed) for the cleanest subtitles and visuals. Very long files may take more time to process."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: "Recommended: 44.1 kHz or 48 kHz stereo exports."
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/types/index.ts
const DEFAULT_LAYOUT = {
    logo: {
        x: 80 / 1920,
        y: 80 / 1080,
        scale: 1
    },
    title: {
        x: 80 / 1920,
        y: 240 / 1080
    },
    waveform: {
        centerX: 0.5,
        centerY: 0.35,
        scale: 1
    },
    subtitle: {
        centerY: 0.78
    },
    progressBar: {
        y: (1080 - 120) / 1080
    }
};
const DEFAULT_SUBTITLE_STYLE = {
    fontSize: 46,
    fontWeight: 700,
    color: "#ffffff",
    highlightColor: "#3b82f6",
    strokeWidth: 0,
    strokeColor: "#000000",
    font: "Lato, sans-serif",
    maxWidthFraction: 0.98,
    uppercase: true,
    transcriptDecoration: false,
    transcriptDecorationOpacity: 30
};
const DEFAULT_TITLE_STYLE = {
    fontSize: 48,
    color: "#1d4ed8",
    fontWeight: 700
};
const DEFAULT_BRANDING = {
    podcastName: "My Podcast",
    titleVisible: false,
    progressBarVisible: true,
    logoUrl: null,
    primaryColor: "#1d4ed8",
    secondaryColor: "#3b82f6",
    videoBackgroundColor: "#0a0a0a",
    waveformColor: "#1d4ed8",
    waveformStyle: "bars",
    subtitleFont: "system-ui",
    titleStyle: DEFAULT_TITLE_STYLE,
    subtitleStyle: DEFAULT_SUBTITLE_STYLE,
    layout: DEFAULT_LAYOUT
};

;// CONCATENATED MODULE: ./src/components/BrandingEditor.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function BrandingEditor(param) {
    let { branding, onChange } = param;
    const handleChange = (field, value)=>{
        onChange({
            ...branding,
            [field]: value
        });
    };
    var _branding_titleStyle;
    const titleStyle = (_branding_titleStyle = branding.titleStyle) !== null && _branding_titleStyle !== void 0 ? _branding_titleStyle : DEFAULT_TITLE_STYLE;
    var _branding_subtitleStyle;
    const subtitleStyle = (_branding_subtitleStyle = branding.subtitleStyle) !== null && _branding_subtitleStyle !== void 0 ? _branding_subtitleStyle : DEFAULT_BRANDING.subtitleStyle;
    const handleSubtitleStyle = (field, value)=>{
        onChange({
            ...branding,
            subtitleStyle: {
                ...subtitleStyle,
                [field]: value
            }
        });
    };
    var _branding_layout;
    const layout = (_branding_layout = branding.layout) !== null && _branding_layout !== void 0 ? _branding_layout : DEFAULT_LAYOUT;
    var _layout_logo;
    const logoLayout = (_layout_logo = layout.logo) !== null && _layout_logo !== void 0 ? _layout_logo : DEFAULT_LAYOUT.logo;
    var _layout_waveform;
    const waveformLayout = (_layout_waveform = layout.waveform) !== null && _layout_waveform !== void 0 ? _layout_waveform : DEFAULT_LAYOUT.waveform;
    const handleLayoutLogo = (updates)=>{
        onChange({
            ...branding,
            layout: {
                ...layout,
                logo: {
                    ...logoLayout,
                    ...updates
                }
            }
        });
    };
    const handleLayoutWaveform = (updates)=>{
        onChange({
            ...branding,
            layout: {
                ...layout,
                waveform: {
                    ...waveformLayout,
                    ...updates
                }
            }
        });
    };
    const handleLogoChange = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = ()=>handleChange("logoUrl", reader.result);
            reader.readAsDataURL(file);
        }
    };
    var _titleStyle_color, _titleStyle_color1, _titleStyle_fontSize, _titleStyle_fontWeight, _logoLayout_scale, _logoLayout_scale1, _subtitleStyle_font, _subtitleStyle_fontSize, _subtitleStyle_fontWeight, _subtitleStyle_color, _subtitleStyle_color1, _subtitleStyle_highlightColor, _subtitleStyle_highlightColor1, _subtitleStyle_strokeWidth, _subtitleStyle_strokeWidth1, _subtitleStyle_strokeColor, _subtitleStyle_strokeColor1, _subtitleStyle_transcriptDecorationOpacity, _subtitleStyle_transcriptDecorationOpacity1, _branding_waveformStyle, _waveformLayout_scale, _waveformLayout_scale1, _branding_waveformColor, _branding_waveformColor1, _branding_videoBackgroundColor, _branding_videoBackgroundColor1, _branding_videoBackgroundBlur, _branding_videoBackgroundBlur1, _branding_videoBackgroundOverlay, _branding_videoBackgroundOverlay1;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-wrap gap-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex-1 min-w-[200px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between gap-3 mb-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "text-xs font-medium text-slate-600",
                                            children: "Podcast Title"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                            label: "Podcast title",
                                            children: "This title appears inside the exported video. Use your show name or episode title so the video feels native to your channel."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                    className: "flex items-center gap-2 text-xs text-slate-600 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "checkbox",
                                            checked: !!branding.titleVisible,
                                            onChange: (e)=>handleChange("titleVisible", e.target.checked),
                                            className: "h-3.5 w-3.5 rounded border-slate-300 bg-white text-slate-900"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "Add title on video"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "text",
                            value: branding.podcastName,
                            onChange: (e)=>handleChange("podcastName", e.target.value),
                            placeholder: "My Podcast",
                            className: "input-field w-full"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "rounded-2xl border border-slate-200/80 p-4 space-y-3 bg-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                className: "text-xs font-semibold text-slate-600 uppercase tracking-wider",
                                children: "Title style"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                label: "Title style",
                                children: "Fine‑tune how your show title appears in the frame. Keep it large and high‑contrast so it is readable on phones."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-3 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Color"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "color",
                                                value: (_titleStyle_color = titleStyle.color) !== null && _titleStyle_color !== void 0 ? _titleStyle_color : DEFAULT_TITLE_STYLE.color,
                                                onChange: (e)=>onChange({
                                                        ...branding,
                                                        titleStyle: {
                                                            ...titleStyle,
                                                            color: e.target.value
                                                        }
                                                    }),
                                                className: "color-picker"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "text",
                                                value: (_titleStyle_color1 = titleStyle.color) !== null && _titleStyle_color1 !== void 0 ? _titleStyle_color1 : DEFAULT_TITLE_STYLE.color,
                                                onChange: (e)=>onChange({
                                                        ...branding,
                                                        titleStyle: {
                                                            ...titleStyle,
                                                            color: e.target.value
                                                        }
                                                    }),
                                                className: "input-field flex-1 min-w-0 font-mono"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Size"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "number",
                                        min: 24,
                                        max: 96,
                                        value: (_titleStyle_fontSize = titleStyle.fontSize) !== null && _titleStyle_fontSize !== void 0 ? _titleStyle_fontSize : DEFAULT_TITLE_STYLE.fontSize,
                                        onChange: (e)=>onChange({
                                                ...branding,
                                                titleStyle: {
                                                    ...titleStyle,
                                                    fontSize: Number(e.target.value) || DEFAULT_TITLE_STYLE.fontSize
                                                }
                                            }),
                                        className: "input-field w-full"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Weight"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                        value: (_titleStyle_fontWeight = titleStyle.fontWeight) !== null && _titleStyle_fontWeight !== void 0 ? _titleStyle_fontWeight : DEFAULT_TITLE_STYLE.fontWeight,
                                        onChange: (e)=>onChange({
                                                ...branding,
                                                titleStyle: {
                                                    ...titleStyle,
                                                    fontWeight: Number(e.target.value) || 700
                                                }
                                            }),
                                        className: "select-combo w-full",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: 400,
                                                children: "Regular"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: 600,
                                                children: "Semibold"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: 700,
                                                children: "Bold"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                className: "block text-xs font-medium text-slate-600 mb-2",
                                children: "Logo"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                label: "Logo",
                                children: "Upload a square or circular logo (at least 512\xd7512px) for the sharpest result in your exported videos."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            branding.logoUrl && // eslint-disable-next-line @next/next/no-img-element -- user-uploaded data URL, not a static asset
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: branding.logoUrl,
                                alt: "Logo",
                                className: "w-12 h-12 rounded-lg object-cover"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: handleLogoChange,
                                className: "block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-slate-900 file:text-white hover:file:bg-black"
                            }),
                            branding.logoUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: ()=>handleChange("logoUrl", null),
                                className: "text-xs text-red-400 hover:text-red-300",
                                children: "Remove"
                            })
                        ]
                    }),
                    branding.logoUrl && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                className: "block text-xs font-medium text-slate-600 mb-2",
                                children: "Size"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "range",
                                        min: 25,
                                        max: 200,
                                        step: 5,
                                        value: Math.round(((_logoLayout_scale = logoLayout.scale) !== null && _logoLayout_scale !== void 0 ? _logoLayout_scale : 1) * 100),
                                        onChange: (e)=>handleLayoutLogo({
                                                scale: Number(e.target.value) / 100
                                            }),
                                        className: "flex-1 h-1.5 rounded-full appearance-none cursor-pointer bg-slate-200 accent-slate-900"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-xs text-zinc-500 tabular-nums w-12 text-right",
                                        children: [
                                            Math.round(((_logoLayout_scale1 = logoLayout.scale) !== null && _logoLayout_scale1 !== void 0 ? _logoLayout_scale1 : 1) * 100),
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-[11px] text-slate-500 mt-1",
                                children: "Drag the logo in the preview to reposition."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "rounded-2xl border border-slate-200/80 p-4 space-y-3 bg-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                className: "text-xs font-semibold text-slate-600 uppercase tracking-wider",
                                children: "Subtitle style"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                label: "Subtitle style",
                                children: "Adjust readability and emphasis for subtitles. High contrast colors and a slightly heavier weight are easier to read on mobile."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-3 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Font"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                value: (_subtitleStyle_font = subtitleStyle.font) !== null && _subtitleStyle_font !== void 0 ? _subtitleStyle_font : "system-ui",
                                                onChange: (e)=>handleSubtitleStyle("font", e.target.value),
                                                className: "select-combo w-full",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "system-ui",
                                                        children: "System UI"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "Georgia",
                                                        children: "Georgia"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "serif",
                                                        children: "Serif"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "Arial",
                                                        children: "Arial"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "Verdana",
                                                        children: "Verdana"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "'Times New Roman'",
                                                        children: "Times New Roman"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "Inter",
                                                        children: "Inter"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "'Open Sans'",
                                                        children: "Open Sans"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "Roboto",
                                                        children: "Roboto"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "Lato",
                                                        children: "Lato"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "flex items-center gap-2 text-[11px] text-slate-600 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "checkbox",
                                                        checked: !!subtitleStyle.uppercase,
                                                        onChange: (e)=>handleSubtitleStyle("uppercase", e.target.checked),
                                                        className: "h-3.5 w-3.5 rounded border-slate-300 bg-white text-slate-900 focus:ring-slate-900"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Uppercase subtitles"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Size"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "number",
                                        min: 20,
                                        max: 80,
                                        value: (_subtitleStyle_fontSize = subtitleStyle.fontSize) !== null && _subtitleStyle_fontSize !== void 0 ? _subtitleStyle_fontSize : 42,
                                        onChange: (e)=>handleSubtitleStyle("fontSize", Number(e.target.value) || 42),
                                        className: "input-field w-full"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Font weight"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                        value: (_subtitleStyle_fontWeight = subtitleStyle.fontWeight) !== null && _subtitleStyle_fontWeight !== void 0 ? _subtitleStyle_fontWeight : 400,
                                        onChange: (e)=>handleSubtitleStyle("fontWeight", Number(e.target.value) || 400),
                                        className: "select-combo w-full",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: 300,
                                                children: "Light (300)"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: 400,
                                                children: "Regular (400)"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: 500,
                                                children: "Medium (500)"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: 600,
                                                children: "Semibold (600)"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                value: 700,
                                                children: "Bold (700)"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-3 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Color"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "color",
                                                value: (_subtitleStyle_color = subtitleStyle.color) !== null && _subtitleStyle_color !== void 0 ? _subtitleStyle_color : "#ffffff",
                                                onChange: (e)=>handleSubtitleStyle("color", e.target.value),
                                                className: "color-picker"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "text",
                                                value: (_subtitleStyle_color1 = subtitleStyle.color) !== null && _subtitleStyle_color1 !== void 0 ? _subtitleStyle_color1 : "#ffffff",
                                                onChange: (e)=>handleSubtitleStyle("color", e.target.value),
                                                className: "input-field flex-1 min-w-0 font-mono"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Highlight"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "color",
                                                value: (_subtitleStyle_highlightColor = subtitleStyle.highlightColor) !== null && _subtitleStyle_highlightColor !== void 0 ? _subtitleStyle_highlightColor : branding.primaryColor,
                                                onChange: (e)=>handleSubtitleStyle("highlightColor", e.target.value),
                                                className: "color-picker"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "text",
                                                value: (_subtitleStyle_highlightColor1 = subtitleStyle.highlightColor) !== null && _subtitleStyle_highlightColor1 !== void 0 ? _subtitleStyle_highlightColor1 : branding.primaryColor,
                                                onChange: (e)=>handleSubtitleStyle("highlightColor", e.target.value),
                                                className: "input-field flex-1 min-w-0 font-mono"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Stroke width"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "number",
                                        min: 0,
                                        max: 8,
                                        value: (_subtitleStyle_strokeWidth = subtitleStyle.strokeWidth) !== null && _subtitleStyle_strokeWidth !== void 0 ? _subtitleStyle_strokeWidth : 0,
                                        onChange: (e)=>handleSubtitleStyle("strokeWidth", Number(e.target.value) || 0),
                                        className: "input-field w-full"
                                    })
                                ]
                            })
                        ]
                    }),
                    ((_subtitleStyle_strokeWidth1 = subtitleStyle.strokeWidth) !== null && _subtitleStyle_strokeWidth1 !== void 0 ? _subtitleStyle_strokeWidth1 : 0) > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid gap-3 sm:grid-cols-3",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                    className: "block text-xs font-medium text-slate-600 mb-2",
                                    children: "Stroke color"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "color",
                                            value: (_subtitleStyle_strokeColor = subtitleStyle.strokeColor) !== null && _subtitleStyle_strokeColor !== void 0 ? _subtitleStyle_strokeColor : "#000000",
                                            onChange: (e)=>handleSubtitleStyle("strokeColor", e.target.value),
                                            className: "color-picker"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            value: (_subtitleStyle_strokeColor1 = subtitleStyle.strokeColor) !== null && _subtitleStyle_strokeColor1 !== void 0 ? _subtitleStyle_strokeColor1 : "#000000",
                                            onChange: (e)=>handleSubtitleStyle("strokeColor", e.target.value),
                                            className: "input-field flex-1 min-w-0 font-mono"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-3 pt-2 border-t border-slate-200",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                className: "flex items-center gap-2 text-[11px] text-slate-600 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "checkbox",
                                        checked: !!subtitleStyle.transcriptDecoration,
                                        onChange: (e)=>handleSubtitleStyle("transcriptDecoration", e.target.checked),
                                        className: "h-3.5 w-3.5 rounded border-slate-300 bg-white text-slate-900 focus:ring-slate-900"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "Transcript decoration"
                                    })
                                ]
                            }),
                            subtitleStyle.transcriptDecoration && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                        children: "Decoration opacity"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "range",
                                                min: 0,
                                                max: 100,
                                                step: 5,
                                                value: (_subtitleStyle_transcriptDecorationOpacity = subtitleStyle.transcriptDecorationOpacity) !== null && _subtitleStyle_transcriptDecorationOpacity !== void 0 ? _subtitleStyle_transcriptDecorationOpacity : 30,
                                                onChange: (e)=>handleSubtitleStyle("transcriptDecorationOpacity", Number(e.target.value) || 30),
                                                className: "flex-1 h-1.5 rounded-full appearance-none cursor-pointer bg-slate-200 accent-slate-900"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "text-xs text-slate-600 tabular-nums w-10",
                                                children: [
                                                    (_subtitleStyle_transcriptDecorationOpacity1 = subtitleStyle.transcriptDecorationOpacity) !== null && _subtitleStyle_transcriptDecorationOpacity1 !== void 0 ? _subtitleStyle_transcriptDecorationOpacity1 : 30,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-[11px] text-slate-500 mt-1",
                                        children: "Other words: white at opacity. Current word: full white."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "rounded-2xl border border-slate-200/80 p-4 space-y-3 bg-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                className: "text-xs font-semibold text-slate-600 uppercase tracking-wider",
                                children: "Waveform"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                label: "Waveform",
                                children: "Choose a waveform style that matches your brand. Simpler shapes feel more minimal; dynamic ones feel more energetic."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "sm:w-1/3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-[11px] font-medium text-slate-600 mb-2",
                                        children: "Style"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                        value: (_branding_waveformStyle = branding.waveformStyle) !== null && _branding_waveformStyle !== void 0 ? _branding_waveformStyle : "bars",
                                        onChange: (e)=>handleChange("waveformStyle", e.target.value),
                                        className: "select-combo w-full",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("optgroup", {
                                                label: "Classic",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "bars",
                                                        children: "Bars (circular)"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "dots",
                                                        children: "Dots"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "ring",
                                                        children: "Pulsing ring"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "linear",
                                                        children: "Linear strip"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("optgroup", {
                                                label: "Modern",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "waves",
                                                        children: "Smooth waves"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "waveLine",
                                                        children: "Wave line"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "stacked",
                                                        children: "Stacked waves"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "equalizer",
                                                        children: "Equalizer"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "waveform",
                                                        children: "Waveform trace"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "pulseRings",
                                                        children: "Pulse rings"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "neonArc",
                                                        children: "Neon arc"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "blob",
                                                        children: "Blob"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "helix",
                                                        children: "Helix"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "bounce",
                                                        children: "Bounce"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "liquid",
                                                        children: "Liquid"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "starburst",
                                                        children: "Starburst"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "particles",
                                                        children: "Particles"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "ribbon",
                                                        children: "Ribbon"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "minimal",
                                                        children: "Minimal"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "glow",
                                                        children: "Glow"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("optgroup", {
                                                label: "Effects",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "spectrum",
                                                        children: "Spectrum"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "orb",
                                                        children: "Orb"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "ripple",
                                                        children: "Ripple"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "sm:w-1/3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-[11px] font-medium text-slate-600 mb-2",
                                        children: "Size"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "range",
                                                min: 50,
                                                max: 200,
                                                step: 5,
                                                value: Math.round(((_waveformLayout_scale = waveformLayout.scale) !== null && _waveformLayout_scale !== void 0 ? _waveformLayout_scale : 1) * 100),
                                                onChange: (e)=>handleLayoutWaveform({
                                                        scale: Number(e.target.value) / 100
                                                    }),
                                                className: "flex-1 h-1.5 rounded-full appearance-none cursor-pointer bg-slate-200 accent-slate-900"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "text-xs text-slate-600 tabular-nums w-10 text-right",
                                                children: [
                                                    Math.round(((_waveformLayout_scale1 = waveformLayout.scale) !== null && _waveformLayout_scale1 !== void 0 ? _waveformLayout_scale1 : 1) * 100),
                                                    "%"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "sm:flex-1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                        className: "block text-[11px] font-medium text-slate-600 mb-2",
                                        children: "Color"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "color",
                                                value: (_branding_waveformColor = branding.waveformColor) !== null && _branding_waveformColor !== void 0 ? _branding_waveformColor : branding.primaryColor,
                                                onChange: (e)=>handleChange("waveformColor", e.target.value),
                                                className: "color-picker"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "text",
                                                value: (_branding_waveformColor1 = branding.waveformColor) !== null && _branding_waveformColor1 !== void 0 ? _branding_waveformColor1 : branding.primaryColor,
                                                onChange: (e)=>handleChange("waveformColor", e.target.value),
                                                className: "input-field flex-1 min-w-0 font-mono"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-[11px] text-slate-500",
                        children: "Drag the waveform in the preview to reposition it."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                className: "block text-xs font-medium text-slate-600 mb-2",
                                children: "Video background"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                label: "Video background",
                                children: "Use a subtle dark background or a soft image with blur. Avoid busy images so subtitles and waveforms stay readable."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "color",
                                value: (_branding_videoBackgroundColor = branding.videoBackgroundColor) !== null && _branding_videoBackgroundColor !== void 0 ? _branding_videoBackgroundColor : "#0a0a0a",
                                onChange: (e)=>onChange({
                                        ...branding,
                                        videoBackgroundColor: e.target.value
                                    }),
                                className: "color-picker"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "text",
                                value: (_branding_videoBackgroundColor1 = branding.videoBackgroundColor) !== null && _branding_videoBackgroundColor1 !== void 0 ? _branding_videoBackgroundColor1 : "#0a0a0a",
                                onChange: (e)=>onChange({
                                        ...branding,
                                        videoBackgroundColor: e.target.value
                                    }),
                                className: "input-field flex-1 min-w-0 font-mono"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-[11px] text-slate-500",
                        children: "Solid color when no image is set"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                className: "block text-xs font-medium text-slate-600 mb-2",
                                children: "Background image"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    branding.videoBackgroundImageUrl && // eslint-disable-next-line @next/next/no-img-element -- user-uploaded data URL, not a static asset
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: branding.videoBackgroundImageUrl,
                                        alt: "Background",
                                        className: "w-16 h-10 rounded object-cover border border-slate-300"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "file",
                                        accept: "image/*",
                                        onChange: (e)=>{
                                            var _e_target_files;
                                            const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onload = ()=>onChange({
                                                        ...branding,
                                                        videoBackgroundImageUrl: reader.result
                                                    });
                                                reader.readAsDataURL(file);
                                            }
                                        },
                                        className: "block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-slate-900 file:text-white hover:file:bg-black"
                                    }),
                                    branding.videoBackgroundImageUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        type: "button",
                                        onClick: ()=>onChange({
                                                ...branding,
                                                videoBackgroundImageUrl: null
                                            }),
                                        className: "text-xs text-red-500 hover:text-red-400",
                                        children: "Remove"
                                    })
                                ]
                            }),
                            branding.videoBackgroundImageUrl && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-3 mt-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-wrap gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "flex items-center gap-2 text-xs text-slate-600 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "checkbox",
                                                        checked: branding.videoBackgroundBlurEnabled !== false,
                                                        onChange: (e)=>onChange({
                                                                ...branding,
                                                                videoBackgroundBlurEnabled: e.target.checked
                                                            }),
                                                        className: "h-3.5 w-3.5 rounded border-slate-300 bg-white text-slate-900"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Blur"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "flex items-center gap-2 text-xs text-slate-600 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "checkbox",
                                                        checked: branding.videoBackgroundOverlayEnabled !== false,
                                                        onChange: (e)=>onChange({
                                                                ...branding,
                                                                videoBackgroundOverlayEnabled: e.target.checked
                                                            }),
                                                        className: "h-3.5 w-3.5 rounded border-slate-300 bg-white text-slate-900"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "Black overlay"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            branding.videoBackgroundBlurEnabled !== false && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                                        children: "Blur amount"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "range",
                                                                min: 0,
                                                                max: 40,
                                                                step: 2,
                                                                value: (_branding_videoBackgroundBlur = branding.videoBackgroundBlur) !== null && _branding_videoBackgroundBlur !== void 0 ? _branding_videoBackgroundBlur : 12,
                                                                onChange: (e)=>onChange({
                                                                        ...branding,
                                                                        videoBackgroundBlur: Number(e.target.value) || 12
                                                                    }),
                                                                className: "flex-1 h-1.5 rounded-full appearance-none cursor-pointer bg-slate-200 accent-slate-900"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "text-xs text-slate-600 tabular-nums w-8",
                                                                children: [
                                                                    (_branding_videoBackgroundBlur1 = branding.videoBackgroundBlur) !== null && _branding_videoBackgroundBlur1 !== void 0 ? _branding_videoBackgroundBlur1 : 12,
                                                                    "px"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            branding.videoBackgroundOverlayEnabled !== false && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: "block text-xs font-medium text-slate-600 mb-2",
                                                        children: "Overlay opacity"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "range",
                                                                min: 0,
                                                                max: 90,
                                                                step: 5,
                                                                value: (_branding_videoBackgroundOverlay = branding.videoBackgroundOverlay) !== null && _branding_videoBackgroundOverlay !== void 0 ? _branding_videoBackgroundOverlay : 55,
                                                                onChange: (e)=>onChange({
                                                                        ...branding,
                                                                        videoBackgroundOverlay: Number(e.target.value) || 55
                                                                    }),
                                                                className: "flex-1 h-1.5 rounded-full appearance-none cursor-pointer bg-slate-200 accent-slate-900"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "text-xs text-slate-600 tabular-nums w-10",
                                                                children: [
                                                                    (_branding_videoBackgroundOverlay1 = branding.videoBackgroundOverlay) !== null && _branding_videoBackgroundOverlay1 !== void 0 ? _branding_videoBackgroundOverlay1 : 55,
                                                                    "%"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                type: "button",
                onClick: ()=>onChange(DEFAULT_BRANDING),
                className: "text-xs text-slate-500 hover:text-slate-700 transition-colors",
                children: "Reset to defaults"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@ffmpeg/ffmpeg/dist/esm/index.js + 5 modules
var esm = __webpack_require__(2877);
// EXTERNAL MODULE: ./node_modules/@ffmpeg/util/dist/esm/index.js + 2 modules
var dist_esm = __webpack_require__(3847);
;// CONCATENATED MODULE: ./src/lib/amplitudeCurve.ts
/**
 * Pre-compute amplitude-over-time from audio for waveform visualization.
 * Used so the circular waveform in preview/export pulses with real audio level.
 */ const DEFAULT_SAMPLE_RATE = 30; // match typical video FPS for frame-accurate lookup
/**
 * Decode audio from URL, compute RMS amplitude per small time window, normalize.
 * Returns a curve that can be indexed by time: curve[floor(time * sampleRate)].
 */ async function computeAmplitudeCurve(audioUrl) {
    let sampleRate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_SAMPLE_RATE;
    const res = await fetch(audioUrl);
    const buf = await res.arrayBuffer();
    const audioCtx = new AudioContext();
    const decoded = await audioCtx.decodeAudioData(buf);
    const duration = decoded.duration;
    const channel = decoded.getChannelData(0);
    const sampleRateAudio = decoded.sampleRate;
    const samplesPerWindow = Math.max(1, Math.floor(sampleRateAudio / sampleRate));
    const numWindows = Math.ceil(channel.length / samplesPerWindow);
    const curve = new Float32Array(numWindows);
    for(let i = 0; i < numWindows; i++){
        let sumSq = 0;
        let count = 0;
        const start = i * samplesPerWindow;
        for(let j = 0; j < samplesPerWindow && start + j < channel.length; j++){
            const s = channel[start + j];
            sumSq += s * s;
            count++;
        }
        const rms = count > 0 ? Math.sqrt(sumSq / count) : 0;
        curve[i] = rms;
    }
    const max = Math.max(...Array.from(curve), 1e-9);
    for(let i = 0; i < curve.length; i++){
        curve[i] /= max;
    }
    return {
        curve,
        duration,
        sampleRate
    };
}
/**
 * Get normalized amplitude (0–1) at a given time from a pre-computed curve.
 */ function getAmplitudeAtTime(curve, time) {
    const index = Math.floor(time * curve.sampleRate);
    const clamped = Math.max(0, Math.min(index, curve.curve.length - 1));
    var _curve_curve_clamped;
    return (_curve_curve_clamped = curve.curve[clamped]) !== null && _curve_curve_clamped !== void 0 ? _curve_curve_clamped : 0;
}

;// CONCATENATED MODULE: ./src/lib/drawVideoFrame.ts
/**
 * Shared drawing logic for video preview and export.
 * Renders one frame with branding, circular waveform, progress, and subtitle.
 */ 

function wrapText(ctx, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let current = "";
    for (const word of words){
        const test = current ? "".concat(current, " ").concat(word) : word;
        const { width } = ctx.measureText(test);
        if (width > maxWidth && current) {
            lines.push(current);
            current = word;
        } else {
            current = test;
        }
    }
    if (current) lines.push(current);
    return lines;
}
/** Get current phrase (words around current time) and which word index is being spoken. */ function getPhraseAndCurrentWord(segments, time) {
    if (segments.length === 0) return null;
    const idx = segments.findIndex((s)=>time >= s.start && time <= s.end);
    if (idx === -1) {
        const next = segments.findIndex((s)=>s.start > time);
        if (next === -1) return null;
        const prev = next - 1;
        if (prev < 0) return null;
        const seg = segments[prev];
        const w = seg.text.trim().split(/\s+/).filter(Boolean);
        return {
            words: w,
            currentIndex: Math.max(0, w.length - 1)
        };
    }
    const current = segments[idx];
    const words = current.text.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return null;
    const segmentDuration = current.end - current.start;
    const t = segmentDuration > 0 ? (time - current.start) / segmentDuration : 0;
    const currentIndex = Math.min(Math.floor(t * words.length), words.length - 1);
    return {
        words,
        currentIndex
    };
}
function getCurrentSubtitle(segments, time) {
    var _segment_text;
    const segment = segments.find((s)=>time >= s.start && time <= s.end);
    var _segment_text_trim;
    return (_segment_text_trim = segment === null || segment === void 0 ? void 0 : (_segment_text = segment.text) === null || _segment_text === void 0 ? void 0 : _segment_text.trim()) !== null && _segment_text_trim !== void 0 ? _segment_text_trim : "";
}
/** How many words from the start fit in exactly maxLines lines. */ function countWordsFittingInLines(ctx, words, maxWidth, maxLines) {
    const spaceW = ctx.measureText(" ").width;
    let lineCount = 0;
    let lineWidth = 0;
    let wordCount = 0;
    for(let i = 0; i < words.length; i++){
        const w = words[i];
        const wordW = ctx.measureText(w).width;
        const need = lineWidth + (lineWidth > 0 ? spaceW : 0) + wordW;
        if (lineWidth > 0 && need > maxWidth) {
            lineCount++;
            if (lineCount >= maxLines) {
                lineWidth = wordW;
                wordCount++;
                for(let j = i + 1; j < words.length; j++){
                    const w2 = words[j];
                    const n2 = lineWidth + spaceW + ctx.measureText(w2).width;
                    if (n2 <= maxWidth) {
                        lineWidth = n2;
                        wordCount++;
                    } else {
                        return wordCount;
                    }
                }
                return wordCount;
            }
            lineWidth = wordW;
            wordCount++;
        } else {
            lineWidth = need;
            wordCount++;
        }
    }
    return wordCount;
}
/** Sliding window: returns words to show + index of current word within that slice. Never drops words. */ function getVisibleWordWindow(ctx, words, currentIndex, maxWidth, maxLines) {
    const count = countWordsFittingInLines(ctx, words, maxWidth, maxLines);
    if (count >= words.length) return {
        words,
        localCurrentIndex: currentIndex
    };
    for(let startIdx = 0; startIdx <= currentIndex; startIdx++){
        const slice = words.slice(startIdx);
        const k = countWordsFittingInLines(ctx, slice, maxWidth, maxLines);
        if (k > 0 && startIdx + k > currentIndex) {
            return {
                words: slice.slice(0, k),
                localCurrentIndex: currentIndex - startIdx
            };
        }
    }
    const start = Math.max(0, currentIndex - 3);
    const k = countWordsFittingInLines(ctx, words.slice(start), maxWidth, maxLines);
    return {
        words: words.slice(start, start + k),
        localCurrentIndex: currentIndex - start
    };
}
/** Wrap words into exactly maxLines lines; returns array of word arrays per line. Never overflows. */ function wrapWordsIntoLines(ctx, words, maxWidth, maxLines) {
    const lines = [];
    let line = [];
    let lineWidth = 0;
    const spaceW = ctx.measureText(" ").width;
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        const wordW = ctx.measureText(word).width;
        const need = lineWidth + (line.length ? spaceW : 0) + wordW;
        if (line.length > 0 && need > maxWidth) {
            lines.push(line);
            if (lines.length >= maxLines) {
                const lastLine = lines.pop();
                let lastLineWidth = lastLine.reduce((acc, w, idx)=>acc + ctx.measureText(w).width + (idx > 0 ? spaceW : 0), 0);
                for(let j = i; j < words.length; j++){
                    const w = words[j];
                    const wW = ctx.measureText(w).width;
                    const n = lastLineWidth + (lastLine.length ? spaceW : 0) + wW;
                    if (n <= maxWidth) {
                        lastLine.push(w);
                        lastLineWidth = n;
                    } else {
                        break;
                    }
                }
                lines.push(lastLine);
                break;
            }
            line = [
                word
            ];
            lineWidth = wordW;
        } else {
            line.push(word);
            lineWidth = need;
        }
    }
    if (line.length > 0 && lines.length < maxLines) lines.push(line);
    while(lines.length < maxLines){
        lines.push([]);
    }
    return lines.slice(0, maxLines);
}
/** Waveform drawing params shared by all styles */ function drawWaveformBars(ctx, opts) {
    const { cx, cy, scale, progress, amplitude, waveformColor, innerR, outerR, barCount, time } = opts;
    ctx.save();
    ctx.translate(cx, cy);
    for(let i = 0; i < barCount; i++){
        const angle = i / barCount * Math.PI * 2 - Math.PI / 2;
        const isActive = i < progress * barCount;
        let barLen;
        if (isActive && amplitude !== null) {
            const mix = 0.35 + 0.65 * amplitude;
            barLen = innerR + (outerR - innerR) * mix;
        } else if (isActive) {
            const wave = Math.sin((time * 3 + i * 0.15) * Math.PI) * 0.5 + 0.5;
            barLen = innerR + (outerR - innerR) * (wave * 0.7 + 0.3);
        } else {
            barLen = innerR + (outerR - innerR) * 0.08;
        }
        ctx.save();
        ctx.rotate(angle);
        ctx.fillStyle = isActive ? waveformColor : waveformColor + "30";
        ctx.fillRect(innerR, -2 * scale, barLen - innerR, 4 * scale);
        ctx.restore();
    }
    ctx.restore();
}
function drawWaveformDots(ctx, opts) {
    const { cx, cy, scale, progress, amplitude, waveformColor, innerR, outerR, barCount, time } = opts;
    const dotRadius = 3 * scale;
    ctx.save();
    ctx.translate(cx, cy);
    for(let i = 0; i < barCount; i++){
        const angle = i / barCount * Math.PI * 2 - Math.PI / 2;
        const isActive = i < progress * barCount;
        let r;
        if (isActive && amplitude !== null) {
            const mix = 0.35 + 0.65 * amplitude;
            r = innerR + (outerR - innerR) * mix;
        } else if (isActive) {
            const wave = Math.sin((time * 3 + i * 0.15) * Math.PI) * 0.5 + 0.5;
            r = innerR + (outerR - innerR) * (wave * 0.7 + 0.3);
        } else {
            r = innerR + (outerR - innerR) * 0.08;
        }
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? waveformColor : waveformColor + "30";
        ctx.fill();
    }
    ctx.restore();
}
function drawWaveformRing(ctx, opts) {
    const { cx, cy, scale, progress, amplitude, waveformColor, innerR, outerR, time } = opts;
    const lineW = 8 * scale;
    const baseR = (innerR + outerR) / 2;
    const rangeR = (outerR - innerR) * 0.5;
    const amp = amplitude !== null ? 0.4 + 0.6 * amplitude : 0.5 + 0.5 * (Math.sin(time * 4) * 0.5 + 0.5);
    const r = baseR + rangeR * amp;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.beginPath();
    ctx.arc(0, 0, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
    ctx.strokeStyle = waveformColor;
    ctx.lineWidth = lineW;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, r, -Math.PI / 2 + Math.PI * 2 * progress, -Math.PI / 2 + Math.PI * 2);
    ctx.strokeStyle = waveformColor + "30";
    ctx.stroke();
    ctx.restore();
}
function drawWaveformLinear(ctx, opts) {
    const { cx, cy, width, scale, progress, duration, waveformColor, amplitudeCurve, waveformScale = 1 } = opts;
    const stripW = Math.min(700 * scale * waveformScale, width * 0.8);
    const stripH = 56 * scale * waveformScale;
    const barCount = 100;
    const halfW = stripW / 2;
    const barW = stripW / barCount;
    ctx.save();
    ctx.translate(cx - halfW, cy - stripH / 2);
    for(let i = 0; i < barCount; i++){
        const t = duration > 0 ? i / (barCount - 1) * duration : 0;
        const amp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const played = duration > 0 ? t <= progress * duration : false;
        const h = (0.2 + 0.8 * amp) * stripH * 0.5;
        const x = i * barW + (barW - 1) / 2;
        ctx.fillStyle = played ? waveformColor : waveformColor + "40";
        ctx.fillRect(x, stripH / 2 - h, Math.max(1, barW - 1), h * 2);
    }
    ctx.restore();
}
/** Smooth flowing circular wave (modern continuous line) */ function drawWaveformWaves(ctx, opts) {
    const { cx, cy, scale, progress, amplitude, waveformColor, innerR, outerR, time } = opts;
    const baseR = (innerR + outerR) / 2;
    const rangeR = (outerR - innerR) * 0.45;
    const amp = amplitude !== null ? 0.4 + 0.6 * amplitude : 0.5 + 0.5 * (Math.sin(time * 3) * 0.5 + 0.5);
    const lobes = 5;
    const points = 120;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.beginPath();
    for(let i = 0; i <= points; i++){
        const t = i / points;
        const angle = t * Math.PI * 2 - Math.PI / 2;
        const wave = Math.sin(angle * lobes + time * 4) * 0.5 + 0.5;
        const r = baseR + rangeR * wave * amp;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = waveformColor;
    ctx.lineWidth = 3 * scale;
    ctx.lineJoin = "round";
    ctx.stroke();
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = waveformColor;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.restore();
}
/** Half-circle spectrum / equalizer bars */ function drawWaveformSpectrum(ctx, opts) {
    const { cx, cy, scale, progress, amplitude, waveformColor, innerR, outerR, time, amplitudeCurve, duration } = opts;
    const barCount = 32;
    const barW = 4 * scale;
    const maxH = 60 * scale;
    const amp = amplitude !== null ? amplitude : 0.5;
    ctx.save();
    ctx.translate(cx, cy + outerR * 0.6);
    for(let i = 0; i < barCount; i++){
        const t = duration > 0 ? i / (barCount - 1) * duration : 0;
        const barAmp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const played = duration > 0 ? t <= progress * duration : false;
        const h = (0.2 + 0.8 * barAmp) * maxH * (0.6 + 0.4 * amp);
        const x = (i - (barCount - 1) / 2) * (barW + 2 * scale);
        ctx.fillStyle = played ? waveformColor : waveformColor + "50";
        ctx.fillRect(x, -h, barW, h);
        ctx.fillRect(x, 0, barW, h);
    }
    ctx.restore();
}
/** Soft pulsing orb / glow */ function drawWaveformOrb(ctx, opts) {
    const { cx, cy, scale, amplitude, waveformColor, innerR, outerR, time } = opts;
    const baseR = (innerR + outerR) / 2;
    const rangeR = (outerR - innerR) * 0.6;
    const amp = amplitude !== null ? 0.5 + 0.5 * amplitude : 0.7 + 0.3 * (Math.sin(time * 3) * 0.5 + 0.5);
    const r = baseR + rangeR * amp;
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    gradient.addColorStop(0, waveformColor + "cc");
    gradient.addColorStop(0.4, waveformColor + "66");
    gradient.addColorStop(0.7, waveformColor + "22");
    gradient.addColorStop(1, waveformColor + "00");
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
}
/** Concentric ripples pulsing outward */ function drawWaveformRipple(ctx, opts) {
    const { cx, cy, scale, progress, amplitude, waveformColor, innerR, outerR, time } = opts;
    const baseR = (innerR + outerR) / 2;
    const ringCount = 4;
    const lineW = 3 * scale;
    const amp = amplitude !== null ? 0.3 + 0.7 * amplitude : 0.6;
    ctx.save();
    ctx.translate(cx, cy);
    for(let i = 0; i < ringCount; i++){
        const phase = i / ringCount * Math.PI * 2 + time * 2;
        const pulse = Math.sin(phase) * 0.5 + 0.5;
        const r = baseR * (0.4 + 0.6 * (i / ringCount)) + (outerR - innerR) * 0.2 * pulse * amp;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = waveformColor + (progress > i / ringCount ? "99" : "40");
        ctx.lineWidth = lineW;
        ctx.stroke();
    }
    ctx.restore();
}
/** Single smooth horizontal wave line (filled curve from amplitude data) */ function drawWaveformWaveLine(ctx, opts) {
    const { cx, cy, width, scale, progress, duration, waveformColor, amplitudeCurve, waveformScale = 1 } = opts;
    const stripW = Math.min(800 * scale * waveformScale, width * 0.85);
    const stripH = 80 * scale * waveformScale;
    const pointCount = 150;
    const halfW = stripW / 2;
    ctx.save();
    ctx.translate(cx - halfW, cy - stripH / 2);
    ctx.beginPath();
    let firstX = 0;
    let firstY = stripH / 2;
    for(let i = 0; i <= pointCount; i++){
        const t = duration > 0 ? i / pointCount * duration : 0;
        const amp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const x = i / pointCount * stripW;
        const y = stripH / 2 - (0.2 + 0.8 * amp) * (stripH / 2);
        if (i === 0) {
            firstX = x;
            firstY = y;
            ctx.moveTo(x, y);
        } else ctx.lineTo(x, y);
    }
    ctx.lineTo(stripW, stripH / 2);
    ctx.lineTo(0, stripH / 2);
    ctx.closePath();
    const playedT = progress * duration;
    const playedX = duration > 0 ? playedT / duration * stripW : 0;
    ctx.fillStyle = waveformColor + "30";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, stripH / 2);
    for(let i = 0; i <= pointCount; i++){
        const t = i / pointCount * duration;
        if (t > playedT) break;
        const amp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const x = i / pointCount * stripW;
        const y = stripH / 2 - (0.2 + 0.8 * amp) * (stripH / 2);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.lineTo(playedX, stripH / 2);
    ctx.closePath();
    ctx.fillStyle = waveformColor;
    ctx.fill();
    ctx.restore();
}
/** Luminous glow waves – smooth layered waves with neon glow (like reference image) */ function drawWaveformGlow(ctx, opts) {
    const { cx, cy, width, scale, progress, duration, amplitude, amplitudeCurve, waveformColor, time, waveformScale = 1 } = opts;
    const stripW = Math.min(900 * scale * waveformScale, width * 0.95);
    const stripH = 100 * scale * waveformScale;
    const points = 120;
    const baseAmp = amplitude !== null ? 0.6 + 0.4 * amplitude : 0.85;
    const halfW = stripW / 2;
    const playedT = progress * duration;
    const getY = (i)=>{
        const t = i / points * duration;
        const audioAmp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const x = i / points * stripW;
        const amp = baseAmp * (0.4 + 0.6 * audioAmp);
        return amp * (stripH / 2) * Math.sin(x / stripW * Math.PI * 4 + time * 2);
    };
    ctx.save();
    ctx.translate(cx - halfW, cy);
    const layers = [
        {
            opacity: "15",
            lineW: 12,
            blur: 35
        },
        {
            opacity: "25",
            lineW: 9,
            blur: 25
        },
        {
            opacity: "45",
            lineW: 6,
            blur: 16
        },
        {
            opacity: "80",
            lineW: 4,
            blur: 8
        }
    ];
    for (const layer of layers){
        ctx.beginPath();
        for(let i = 0; i <= points; i++){
            const x = i / points * stripW;
            const y = -getY(i);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.shadowColor = waveformColor;
        ctx.shadowBlur = layer.blur * scale;
        ctx.strokeStyle = waveformColor + layer.opacity;
        ctx.lineWidth = layer.lineW * scale;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
    ctx.shadowBlur = 0;
    ctx.beginPath();
    let started = false;
    for(let i = 0; i <= points; i++){
        const t = i / points * duration;
        if (t > playedT) break;
        const x = i / points * stripW;
        const y = -getY(i);
        if (!started) {
            ctx.moveTo(x, y);
            started = true;
        } else ctx.lineTo(x, y);
    }
    if (started) {
        ctx.shadowColor = waveformColor;
        ctx.shadowBlur = 10 * scale;
        ctx.strokeStyle = waveformColor;
        ctx.lineWidth = 3.5 * scale;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
    ctx.shadowBlur = 0;
    ctx.restore();
}
/** Horizontal equalizer bars – classic EQ display */ function drawWaveformEqualizer(ctx, opts) {
    const { cx, cy, width, scale, progress, duration, waveformColor, amplitudeCurve, waveformScale = 1 } = opts;
    const stripW = Math.min(750 * scale * waveformScale, width * 0.85);
    const stripH = 70 * scale * waveformScale;
    const barCount = 48;
    const barGap = 3 * scale;
    const barW = (stripW - (barCount - 1) * barGap) / barCount;
    const halfW = stripW / 2;
    ctx.save();
    ctx.translate(cx - halfW, cy - stripH / 2);
    for(let i = 0; i < barCount; i++){
        const t = duration > 0 ? i / (barCount - 1) * duration : 0;
        const amp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const played = duration > 0 ? t <= progress * duration : false;
        const h = (0.15 + 0.85 * amp) * stripH * 0.5;
        const x = i * (barW + barGap);
        ctx.fillStyle = played ? waveformColor : waveformColor + "35";
        ctx.fillRect(x, stripH / 2 - h, barW, h * 2);
    }
    ctx.restore();
}
/** Single amplitude trace line – SoundCloud / audio editor style */ function drawWaveformTrace(ctx, opts) {
    const { cx, cy, width, scale, progress, duration, waveformColor, amplitudeCurve, waveformScale = 1 } = opts;
    const stripW = Math.min(850 * scale * waveformScale, width * 0.9);
    const stripH = 90 * scale * waveformScale;
    const points = 200;
    const halfW = stripW / 2;
    const playedT = progress * duration;
    ctx.save();
    ctx.translate(cx - halfW, cy);
    ctx.beginPath();
    for(let i = 0; i <= points; i++){
        const t = i / points * duration;
        const amp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const x = i / points * stripW;
        const y = -(0.2 + 0.8 * amp) * (stripH / 2);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = waveformColor + "40";
    ctx.lineWidth = 2 * scale;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    ctx.beginPath();
    const playedIdx = duration > 0 ? Math.floor(playedT / duration * points) : points;
    for(let i = 0; i <= playedIdx; i++){
        const t = i / points * duration;
        const amp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const x = i / points * stripW;
        const y = -(0.2 + 0.8 * amp) * (stripH / 2);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = waveformColor;
    ctx.lineWidth = 2.5 * scale;
    ctx.stroke();
    ctx.restore();
}
/** Minimal concentric pulse rings */ function drawWaveformPulseRings(ctx, opts) {
    const { cx, cy, scale, progress, amplitude, waveformColor, innerR, outerR, time } = opts;
    const ringCount = 4;
    const amp = amplitude !== null ? 0.5 + 0.5 * amplitude : 0.7;
    ctx.save();
    ctx.translate(cx, cy);
    for(let i = 0; i < ringCount; i++){
        const phase = i / ringCount * Math.PI * 2 + time * 1.5;
        const pulse = Math.sin(phase) * 0.5 + 0.5;
        const r = innerR + (outerR - innerR) / ringCount * (i + 0.5 + pulse * amp * 0.3);
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2 * progress);
        ctx.strokeStyle = waveformColor + (progress > i / ringCount ? "aa" : "40");
        ctx.lineWidth = 2 * scale;
        ctx.stroke();
    }
    ctx.restore();
}
/** Neon arc – glowing rotating arc */ function drawWaveformNeonArc(ctx, opts) {
    const { cx, cy, scale, amplitude, waveformColor, innerR, outerR, time } = opts;
    const r = (innerR + outerR) / 2;
    const arcLen = Math.PI * 1.2;
    const startAngle = -Math.PI / 2 + time * 0.5;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.shadowColor = waveformColor;
    ctx.shadowBlur = 20 * scale;
    ctx.beginPath();
    ctx.arc(0, 0, r, startAngle, startAngle + arcLen);
    ctx.strokeStyle = waveformColor;
    ctx.lineWidth = 6 * scale;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();
}
/** Organic morphing blob */ function drawWaveformBlob(ctx, opts) {
    const { cx, cy, scale, amplitude, waveformColor, innerR, outerR, time } = opts;
    const baseR = (innerR + outerR) / 2;
    const amp = amplitude !== null ? 0.6 + 0.4 * amplitude : 0.8;
    const lobes = 6;
    const points = 60;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.beginPath();
    for(let i = 0; i <= points; i++){
        const angle = i / points * Math.PI * 2 - Math.PI / 2;
        const wave = Math.sin(angle * lobes + time * 2) * 0.5 + 0.5;
        const r = baseR + (outerR - innerR) * 0.3 * wave * amp;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = waveformColor + "40";
    ctx.fill();
    ctx.strokeStyle = waveformColor;
    ctx.lineWidth = 2 * scale;
    ctx.stroke();
    ctx.restore();
}
/** DNA helix – double spiral */ function drawWaveformHelix(ctx, opts) {
    const { cx, cy, width, scale, progress, duration, amplitude, amplitudeCurve, waveformColor, time, waveformScale = 1 } = opts;
    const stripW = Math.min(600 * scale * waveformScale, width * 0.75);
    const stripH = 80 * scale * waveformScale;
    const points = 80;
    const amp = amplitude !== null ? 0.5 + 0.5 * amplitude : 0.7;
    ctx.save();
    ctx.translate(cx - stripW / 2, cy);
    for (const sign of [
        1,
        -1
    ]){
        ctx.beginPath();
        for(let i = 0; i <= points; i++){
            const t = i / points * duration;
            const audioAmp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
            const x = i / points * stripW;
            const y = sign * (stripH / 2) * (0.3 + 0.7 * audioAmp * amp) * Math.sin(i / points * Math.PI * 6 + time * 2);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = waveformColor + (sign > 0 ? "ff" : "99");
        ctx.lineWidth = 2.5 * scale;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
    ctx.restore();
}
/** Bouncing bars – classic bounce equalizer */ function drawWaveformBounce(ctx, opts) {
    const { cx, cy, width, scale, progress, duration, waveformColor, amplitudeCurve, waveformScale = 1 } = opts;
    const stripW = Math.min(700 * scale * waveformScale, width * 0.8);
    const stripH = 60 * scale * waveformScale;
    const barCount = 40;
    const barW = stripW / barCount - 2 * scale;
    const halfW = stripW / 2;
    ctx.save();
    ctx.translate(cx - halfW, cy);
    for(let i = 0; i < barCount; i++){
        const t = duration > 0 ? i / (barCount - 1) * duration : 0;
        const amp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const played = duration > 0 ? t <= progress * duration : false;
        const h = (0.2 + 0.8 * amp) * stripH * 0.5;
        const x = i * (stripW / barCount) + scale;
        ctx.fillStyle = played ? waveformColor : waveformColor + "30";
        ctx.fillRect(x, -h, barW, h * 2);
    }
    ctx.restore();
}
/** Liquid – thick flowing wave */ function drawWaveformLiquid(ctx, opts) {
    const { cx, cy, width, scale, progress, duration, amplitude, amplitudeCurve, waveformColor, time, waveformScale = 1 } = opts;
    const stripW = Math.min(800 * scale * waveformScale, width * 0.88);
    const stripH = 100 * scale * waveformScale;
    const points = 100;
    const amp = amplitude !== null ? 0.6 + 0.4 * amplitude : 0.8;
    ctx.save();
    ctx.translate(cx - stripW / 2, cy);
    ctx.beginPath();
    ctx.moveTo(0, stripH / 2);
    for(let i = 0; i <= points; i++){
        const t = i / points * duration;
        const audioAmp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const x = i / points * stripW;
        const y = -(0.3 + 0.7 * audioAmp * amp) * (stripH / 2) * Math.sin(x / stripW * Math.PI * 3 + time * 1.5);
        ctx.lineTo(x, y);
    }
    ctx.lineTo(stripW, stripH / 2);
    ctx.closePath();
    ctx.fillStyle = waveformColor + "50";
    ctx.fill();
    ctx.strokeStyle = waveformColor;
    ctx.lineWidth = 3 * scale;
    ctx.stroke();
    ctx.restore();
}
/** Starburst – radial lines from center */ function drawWaveformStarburst(ctx, opts) {
    const { cx, cy, scale, progress, amplitude, waveformColor, innerR, outerR, time } = opts;
    const rayCount = 24;
    const amp = amplitude !== null ? 0.5 + 0.5 * amplitude : 0.7;
    const baseLen = outerR - innerR;
    ctx.save();
    ctx.translate(cx, cy);
    for(let i = 0; i < rayCount; i++){
        const angle = i / rayCount * Math.PI * 2 - Math.PI / 2 + time * 0.3;
        const pulse = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;
        const len = innerR + baseLen * (0.3 + 0.7 * pulse * amp);
        const isActive = i / rayCount < progress;
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * innerR, Math.sin(angle) * innerR);
        ctx.lineTo(Math.cos(angle) * len, Math.sin(angle) * len);
        ctx.strokeStyle = isActive ? waveformColor : waveformColor + "30";
        ctx.lineWidth = 3 * scale;
        ctx.lineCap = "round";
        ctx.stroke();
    }
    ctx.restore();
}
/** Particles – scattered pulsing dots */ function drawWaveformParticles(ctx, opts) {
    const { cx, cy, scale, amplitude, waveformColor, innerR, outerR, time } = opts;
    const particleCount = 45;
    const amp = amplitude !== null ? 0.5 + 0.5 * amplitude : 0.7;
    const baseR = (innerR + outerR) / 2;
    ctx.save();
    ctx.translate(cx, cy);
    for(let i = 0; i < particleCount; i++){
        const angle = i / particleCount * Math.PI * 2 + time * 0.5;
        const pulse = Math.sin(time * 3 + i * 0.3) * 0.5 + 0.5;
        const r = baseR + (outerR - innerR) * 0.4 * pulse * amp;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        const size = 2 + pulse * 2 * scale;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = waveformColor + "cc";
        ctx.fill();
    }
    ctx.restore();
}
/** Ribbon – flowing ribbon wave */ function drawWaveformRibbon(ctx, opts) {
    const { cx, cy, width, scale, progress, duration, amplitude, amplitudeCurve, waveformColor, time, waveformScale = 1 } = opts;
    const stripW = Math.min(750 * scale * waveformScale, width * 0.85);
    const ribbonH = 16 * scale * waveformScale;
    const points = 100;
    const amp = amplitude !== null ? 0.6 + 0.4 * amplitude : 0.8;
    ctx.save();
    ctx.translate(cx - stripW / 2, cy);
    ctx.beginPath();
    for(let i = 0; i <= points; i++){
        const t = i / points * duration;
        const audioAmp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const x = i / points * stripW;
        const y = ribbonH * amp * Math.sin(x / stripW * Math.PI * 4 + time * 2) * (0.5 + 0.5 * audioAmp);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    for(let i = points; i >= 0; i--){
        const t = i / points * duration;
        const audioAmp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, t) : 0.5;
        const x = i / points * stripW;
        const y = ribbonH * amp * Math.sin(x / stripW * Math.PI * 4 + time * 2) * (0.5 + 0.5 * audioAmp) + ribbonH;
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = waveformColor + "60";
    ctx.fill();
    ctx.strokeStyle = waveformColor;
    ctx.lineWidth = 1.5 * scale;
    ctx.stroke();
    ctx.restore();
}
/** Minimal – ultra-thin flowing lines */ function drawWaveformMinimal(ctx, opts) {
    const { cx, cy, width, scale, amplitude, amplitudeCurve, waveformColor, time, waveformScale = 1 } = opts;
    const stripW = Math.min(650 * scale * waveformScale, width * 0.8);
    const lineCount = 3;
    const points = 60;
    const baseAmp = amplitude !== null ? 0.5 + 0.5 * amplitude : 0.7;
    const amp = 12 * scale * waveformScale * baseAmp;
    ctx.save();
    ctx.translate(cx - stripW / 2, cy);
    for(let l = 0; l < lineCount; l++){
        ctx.beginPath();
        const audioAmp = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, time) : 0.5;
        for(let i = 0; i <= points; i++){
            const x = i / points * stripW;
            const y = amp * Math.sin(x / stripW * Math.PI * 5 + time * 2 + l * 2) * (0.4 + 0.6 * audioAmp);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = waveformColor + (l === 0 ? "ff" : l === 1 ? "99" : "66");
        ctx.lineWidth = 1 * scale;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
    ctx.restore();
}
/** Stacked horizontal sine waves (modern minimal) */ function drawWaveformStacked(ctx, opts) {
    const { cx, cy, width, scale, amplitude, waveformColor, time, waveformScale = 1 } = opts;
    const stripW = Math.min(700 * scale * waveformScale, width * 0.8);
    const amp = (amplitude !== null ? 12 * scale * (0.5 + 0.5 * amplitude) : 12 * scale) * waveformScale;
    const layers = [
        {
            phase: 0,
            opacity: "ff"
        },
        {
            phase: Math.PI * 0.5,
            opacity: "99"
        },
        {
            phase: Math.PI,
            opacity: "66"
        }
    ];
    ctx.save();
    ctx.translate(cx - stripW / 2, cy);
    const points = 80;
    for (const layer of layers){
        ctx.beginPath();
        for(let i = 0; i <= points; i++){
            const x = i / points * stripW;
            const y = amp * Math.sin(x / stripW * Math.PI * 4 + time * 3 + layer.phase);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = waveformColor + layer.opacity;
        ctx.lineWidth = 2.5 * scale;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
    ctx.restore();
}
function drawVideoFrame(opts) {
    const { ctx, width, height, time, duration, branding, segments, logoImg, backgroundImg, amplitudeCurve } = opts;
    const scale = width / 1920;
    var _branding_layout;
    const layout = {
        ...DEFAULT_LAYOUT,
        ...(_branding_layout = branding.layout) !== null && _branding_layout !== void 0 ? _branding_layout : {}
    };
    const pad = 80 * scale;
    var _layout_logo_scale;
    const logoScale = (_layout_logo_scale = layout.logo.scale) !== null && _layout_logo_scale !== void 0 ? _layout_logo_scale : 1;
    const logoSize = 120 * scale * logoScale;
    if (backgroundImg) {
        ctx.save();
        const blurEnabled = branding.videoBackgroundBlurEnabled !== false;
        const overlayEnabled = branding.videoBackgroundOverlayEnabled !== false;
        var _branding_videoBackgroundBlur;
        const blurPx = blurEnabled ? (_branding_videoBackgroundBlur = branding.videoBackgroundBlur) !== null && _branding_videoBackgroundBlur !== void 0 ? _branding_videoBackgroundBlur : 12 : 0;
        var _branding_videoBackgroundOverlay;
        const overlayAlpha = overlayEnabled ? ((_branding_videoBackgroundOverlay = branding.videoBackgroundOverlay) !== null && _branding_videoBackgroundOverlay !== void 0 ? _branding_videoBackgroundOverlay : 55) / 100 : 0;
        const imgW = backgroundImg.naturalWidth;
        const imgH = backgroundImg.naturalHeight;
        const scaleCover = Math.max(width / imgW, height / imgH);
        const drawW = imgW * scaleCover;
        const drawH = imgH * scaleCover;
        const x = (width - drawW) / 2;
        const y = (height - drawH) / 2;
        if (blurPx > 0) {
            ctx.filter = "blur(".concat(Math.min(40, blurPx), "px)");
        }
        ctx.drawImage(backgroundImg, x, y, drawW, drawH);
        ctx.filter = "none";
        if (overlayAlpha > 0) {
            ctx.fillStyle = "rgba(0,0,0,".concat(Math.min(1, overlayAlpha), ")");
            ctx.fillRect(0, 0, width, height);
        }
        ctx.restore();
    } else {
        var _branding_videoBackgroundColor;
        const bgColor = (_branding_videoBackgroundColor = branding.videoBackgroundColor) !== null && _branding_videoBackgroundColor !== void 0 ? _branding_videoBackgroundColor : "#0a0a0a";
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);
    }
    const logoX = layout.logo.x * width;
    const logoY = layout.logo.y * height;
    if (logoImg) {
        ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
    }
    if (branding.titleVisible) {
        const titleX = layout.title.x * width;
        const titleY = layout.title.y * height;
        var _branding_titleStyle;
        const titleStyle = (_branding_titleStyle = branding.titleStyle) !== null && _branding_titleStyle !== void 0 ? _branding_titleStyle : DEFAULT_TITLE_STYLE;
        var _titleStyle_color;
        const titleColor = (_titleStyle_color = titleStyle.color) !== null && _titleStyle_color !== void 0 ? _titleStyle_color : branding.primaryColor;
        var _titleStyle_fontSize;
        const titleFontSize = ((_titleStyle_fontSize = titleStyle.fontSize) !== null && _titleStyle_fontSize !== void 0 ? _titleStyle_fontSize : DEFAULT_TITLE_STYLE.fontSize) * scale;
        var _titleStyle_fontWeight;
        const titleWeight = (_titleStyle_fontWeight = titleStyle.fontWeight) !== null && _titleStyle_fontWeight !== void 0 ? _titleStyle_fontWeight : DEFAULT_TITLE_STYLE.fontWeight;
        ctx.fillStyle = titleColor;
        ctx.font = "".concat(titleWeight, " ").concat(titleFontSize, "px ").concat(branding.subtitleFont || "system-ui", ", sans-serif");
        ctx.fillText(branding.podcastName, titleX, titleY);
    }
    var _branding_waveformColor;
    const waveformColor = (_branding_waveformColor = branding.waveformColor) !== null && _branding_waveformColor !== void 0 ? _branding_waveformColor : branding.primaryColor;
    const cx = layout.waveform.centerX * width;
    const cy = layout.waveform.centerY * height;
    var _layout_waveform_scale;
    const waveformScale = (_layout_waveform_scale = layout.waveform.scale) !== null && _layout_waveform_scale !== void 0 ? _layout_waveform_scale : 1;
    const innerR = 140 * scale * waveformScale;
    const outerR = 220 * scale * waveformScale;
    const barCount = 72;
    const progress = duration > 0 ? time / duration : 0;
    const amplitude = amplitudeCurve ? getAmplitudeAtTime(amplitudeCurve, time) : null;
    var _branding_waveformStyle;
    const waveformStyle = (_branding_waveformStyle = branding.waveformStyle) !== null && _branding_waveformStyle !== void 0 ? _branding_waveformStyle : "bars";
    if (waveformStyle === "bars") {
        drawWaveformBars(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            barCount,
            time
        });
    } else if (waveformStyle === "dots") {
        drawWaveformDots(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            barCount,
            time
        });
    } else if (waveformStyle === "ring") {
        drawWaveformRing(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time
        });
    } else if (waveformStyle === "linear") {
        drawWaveformLinear(ctx, {
            cx,
            cy,
            width,
            scale,
            progress,
            duration,
            waveformColor,
            amplitudeCurve,
            waveformScale
        });
    } else if (waveformStyle === "waves") {
        drawWaveformWaves(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time
        });
    } else if (waveformStyle === "spectrum") {
        drawWaveformSpectrum(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time,
            amplitudeCurve,
            duration
        });
    } else if (waveformStyle === "orb") {
        drawWaveformOrb(ctx, {
            cx,
            cy,
            scale,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time
        });
    } else if (waveformStyle === "ripple") {
        drawWaveformRipple(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time
        });
    } else if (waveformStyle === "waveLine") {
        drawWaveformWaveLine(ctx, {
            cx,
            cy,
            width,
            scale,
            progress,
            duration,
            waveformColor,
            amplitudeCurve,
            waveformScale
        });
    } else if (waveformStyle === "stacked") {
        drawWaveformStacked(ctx, {
            cx,
            cy,
            width,
            scale,
            amplitude,
            waveformColor,
            time,
            waveformScale
        });
    } else if (waveformStyle === "equalizer") {
        drawWaveformEqualizer(ctx, {
            cx,
            cy,
            width,
            scale,
            progress,
            duration,
            waveformColor,
            amplitudeCurve,
            waveformScale
        });
    } else if (waveformStyle === "waveform") {
        drawWaveformTrace(ctx, {
            cx,
            cy,
            width,
            scale,
            progress,
            duration,
            waveformColor,
            amplitudeCurve,
            waveformScale
        });
    } else if (waveformStyle === "pulseRings") {
        drawWaveformPulseRings(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time
        });
    } else if (waveformStyle === "neonArc") {
        drawWaveformNeonArc(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time
        });
    } else if (waveformStyle === "blob") {
        drawWaveformBlob(ctx, {
            cx,
            cy,
            scale,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time
        });
    } else if (waveformStyle === "helix") {
        drawWaveformHelix(ctx, {
            cx,
            cy,
            width,
            scale,
            progress,
            duration,
            amplitude,
            amplitudeCurve,
            waveformColor,
            time,
            waveformScale
        });
    } else if (waveformStyle === "bounce") {
        drawWaveformBounce(ctx, {
            cx,
            cy,
            width,
            scale,
            progress,
            duration,
            waveformColor,
            amplitudeCurve,
            waveformScale
        });
    } else if (waveformStyle === "liquid") {
        drawWaveformLiquid(ctx, {
            cx,
            cy,
            width,
            scale,
            progress,
            duration,
            amplitude,
            amplitudeCurve,
            waveformColor,
            time,
            waveformScale
        });
    } else if (waveformStyle === "starburst") {
        drawWaveformStarburst(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time
        });
    } else if (waveformStyle === "particles") {
        drawWaveformParticles(ctx, {
            cx,
            cy,
            scale,
            progress,
            amplitude,
            waveformColor,
            innerR,
            outerR,
            time
        });
    } else if (waveformStyle === "ribbon") {
        drawWaveformRibbon(ctx, {
            cx,
            cy,
            width,
            scale,
            progress,
            duration,
            amplitude,
            amplitudeCurve,
            waveformColor,
            time,
            waveformScale
        });
    } else if (waveformStyle === "minimal") {
        drawWaveformMinimal(ctx, {
            cx,
            cy,
            width,
            scale,
            amplitude,
            amplitudeCurve,
            waveformColor,
            time,
            waveformScale
        });
    } else if (waveformStyle === "glow") {
        drawWaveformGlow(ctx, {
            cx,
            cy,
            width,
            scale,
            progress,
            duration,
            amplitude,
            amplitudeCurve,
            waveformColor,
            time,
            waveformScale
        });
    }
    // Progress bar on the video itself (always on unless explicitly disabled)
    if (branding.progressBarVisible !== false) {
        const progressBarH = Math.max(10, 14 * scale);
        const progressBarY = layout.progressBar.y * height - progressBarH / 2;
        const barW = width - pad * 2;
        const progressWidth = duration > 0 ? time / duration * barW : 0;
        const trackColor = branding.primaryColor + "50";
        const fillColor = branding.primaryColor;
        ctx.fillStyle = trackColor;
        ctx.fillRect(pad, progressBarY, barW, progressBarH);
        if (progressWidth > 0) {
            ctx.fillStyle = fillColor;
            ctx.fillRect(pad, progressBarY, progressWidth, progressBarH);
        }
    }
    var _branding_subtitleStyle;
    // Subtitle size, color, stroke, font: edit DEFAULT_SUBTITLE_STYLE in src/types/index.ts
    // or use the Branding UI (Subtitle style). Values here come from branding.subtitleStyle.
    const style = {
        ...DEFAULT_SUBTITLE_STYLE,
        ...(_branding_subtitleStyle = branding.subtitleStyle) !== null && _branding_subtitleStyle !== void 0 ? _branding_subtitleStyle : {}
    };
    const fontFamily = style.font || branding.subtitleFont || "system-ui";
    var _style_fontSize;
    const fontSize = ((_style_fontSize = style.fontSize) !== null && _style_fontSize !== void 0 ? _style_fontSize : 42) * scale;
    var _style_fontWeight;
    const fontWeight = (_style_fontWeight = style.fontWeight) !== null && _style_fontWeight !== void 0 ? _style_fontWeight : 400;
    const fontStr = "".concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily, ", sans-serif");
    const lineHeight = fontSize * 1.45;
    const maxWidthFraction = 0.7;
    const maxWidth = Math.max(100, width * maxWidthFraction);
    const centerX = width / 2;
    const subtitleCenterY = layout.subtitle.centerY * height;
    var _style_strokeWidth;
    const strokeW = ((_style_strokeWidth = style.strokeWidth) !== null && _style_strokeWidth !== void 0 ? _style_strokeWidth : 0) * scale;
    var _style_strokeColor;
    const strokeColor = (_style_strokeColor = style.strokeColor) !== null && _style_strokeColor !== void 0 ? _style_strokeColor : "#000000";
    var _style_transcriptDecoration;
    const decorationOn = !!((_style_transcriptDecoration = style.transcriptDecoration) !== null && _style_transcriptDecoration !== void 0 ? _style_transcriptDecoration : false);
    var _style_transcriptDecorationOpacity;
    const decorationOpacity = Math.max(0, Math.min(1, ((_style_transcriptDecorationOpacity = style.transcriptDecorationOpacity) !== null && _style_transcriptDecorationOpacity !== void 0 ? _style_transcriptDecorationOpacity : 30) / 100));
    const drawWord = (word, x, y, fillColor, isCurrent)=>{
        const text = word;
        ctx.font = fontStr;
        if (decorationOn) {
            ctx.fillStyle = isCurrent ? "#ffffff" : "rgba(255,255,255,".concat(decorationOpacity, ")");
        } else {
            ctx.fillStyle = fillColor;
        }
        if (strokeW > 0) {
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = strokeW;
            ctx.lineJoin = "round";
            ctx.strokeText(text, x, y);
        }
        ctx.fillText(text, x, y);
    };
    const phraseData = getPhraseAndCurrentWord(segments, time);
    if (phraseData) {
        const { words, currentIndex } = phraseData;
        const displayWords = words.map((w)=>style.uppercase ? w.toUpperCase() : w);
        ctx.font = fontStr;
        const subtitleMaxLines = 4;
        const { words: visibleWords, localCurrentIndex } = getVisibleWordWindow(ctx, displayWords, currentIndex, maxWidth, subtitleMaxLines);
        const linesOfWords = wrapWordsIntoLines(ctx, visibleWords, maxWidth, subtitleMaxLines);
        let wordIdx = 0;
        let currentLineIdx = -1;
        let currentWordInLine = -1;
        for(let li = 0; li < linesOfWords.length; li++){
            for(let wi = 0; wi < linesOfWords[li].length; wi++){
                if (wordIdx === localCurrentIndex) {
                    currentLineIdx = li;
                    currentWordInLine = wi;
                }
                wordIdx++;
            }
        }
        const totalLines = linesOfWords.length;
        const startY = subtitleCenterY - totalLines * lineHeight / 2 + lineHeight / 2;
        const spaceWidth = ctx.measureText(" ").width;
        ctx.textAlign = "center";
        for(let li = 0; li < linesOfWords.length; li++){
            const lineWords = linesOfWords[li];
            const wordWidths = lineWords.map((w)=>ctx.measureText(w).width + spaceWidth);
            ctx.font = fontStr;
            const totalLineWidth = wordWidths.reduce((a, b)=>a + b, 0) - spaceWidth;
            let x = centerX - totalLineWidth / 2;
            const y = startY + li * lineHeight;
            for(let wi = 0; wi < lineWords.length; wi++){
                const word = lineWords[wi];
                const isCurrent = li === currentLineIdx && wi === currentWordInLine;
                const wordOnlyWidth = wordWidths[wi] - spaceWidth;
                x += wordOnlyWidth / 2;
                var _style_highlightColor, _style_color;
                const fillColor = isCurrent ? (_style_highlightColor = style.highlightColor) !== null && _style_highlightColor !== void 0 ? _style_highlightColor : branding.primaryColor : (_style_color = style.color) !== null && _style_color !== void 0 ? _style_color : "#ffffff";
                drawWord(word, x, y, fillColor, isCurrent);
                x += wordOnlyWidth / 2 + spaceWidth;
            }
        }
        ctx.textAlign = "left";
    } else {
        const subtitle = getCurrentSubtitle(segments, time);
        if (subtitle) {
            ctx.font = fontStr;
            const source = style.uppercase ? subtitle.toUpperCase() : subtitle;
            const allLines = wrapText(ctx, source, maxWidth);
            const maxLines = 4;
            const lines = allLines.slice(0, maxLines);
            while(lines.length < 2)lines.push("");
            const lineCount = lines.length;
            const startY = subtitleCenterY - lineCount * lineHeight / 2 + lineHeight / 2;
            ctx.textAlign = "center";
            for(let i = 0; i < lineCount; i++){
                var _lines_i;
                const line = (_lines_i = lines[i]) !== null && _lines_i !== void 0 ? _lines_i : "";
                const y = startY + i * lineHeight;
                if (line) {
                    if (strokeW > 0) {
                        ctx.strokeStyle = strokeColor;
                        ctx.lineWidth = strokeW;
                        ctx.lineJoin = "round";
                        ctx.strokeText(line, centerX, y);
                    }
                    var _style_color1;
                    ctx.fillStyle = decorationOn ? "rgba(255,255,255,".concat(decorationOpacity, ")") : (_style_color1 = style.color) !== null && _style_color1 !== void 0 ? _style_color1 : "#ffffff";
                    ctx.fillText(line, centerX, y);
                }
            }
            ctx.textAlign = "left";
        }
    }
}

;// CONCATENATED MODULE: ./src/components/VideoPreview.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function formatTime(sec) {
    if (!Number.isFinite(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return "".concat(m, ":").concat(String(s).padStart(2, "0"));
}




function VideoPreview(param) {
    let { audioUrl, segments, branding, amplitudeCurve, onLayoutChange, onDurationLoaded } = param;
    const canvasRef = (0,react.useRef)(null);
    const containerRef = (0,react.useRef)(null);
    const audioRef = (0,react.useRef)(null);
    const audioContextRef = (0,react.useRef)(null);
    const audioSourceRef = (0,react.useRef)(null);
    const [isPlaying, setIsPlaying] = (0,react.useState)(false);
    const [duration, setDuration] = (0,react.useState)(0);
    const [currentTime, setCurrentTime] = (0,react.useState)(0);
    const [error, setError] = (0,react.useState)(null);
    const [exporting, setExporting] = (0,react.useState)(false);
    const [exportProgress, setExportProgress] = (0,react.useState)(0);
    const [dragging, setDragging] = (0,react.useState)(null);
    const logoImgRef = (0,react.useRef)(null);
    const backgroundImgRef = (0,react.useRef)(null);
    const layoutRef = (0,react.useRef)(DEFAULT_LAYOUT);
    const width = 1920;
    const height = 1080;
    var _branding_layout;
    const layout = {
        ...DEFAULT_LAYOUT,
        ...(_branding_layout = branding.layout) !== null && _branding_layout !== void 0 ? _branding_layout : {}
    };
    layoutRef.current = layout;
    var _layout_logo_scale;
    const logoScale = (_layout_logo_scale = layout.logo.scale) !== null && _layout_logo_scale !== void 0 ? _layout_logo_scale : 1;
    const logoSize = 120 * logoScale;
    (0,react.useEffect)(()=>{
        if (!branding.logoUrl) {
            logoImgRef.current = null;
            return;
        }
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = ()=>{
            logoImgRef.current = img;
        };
        img.onerror = ()=>{
            logoImgRef.current = null;
        };
        img.src = branding.logoUrl;
        return ()=>{
            logoImgRef.current = null;
        };
    }, [
        branding.logoUrl
    ]);
    const [bgImageReady, setBgImageReady] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        if (!branding.videoBackgroundImageUrl) {
            backgroundImgRef.current = null;
            return;
        }
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = ()=>{
            backgroundImgRef.current = img;
            setBgImageReady((n)=>n + 1);
        };
        img.onerror = ()=>{
            backgroundImgRef.current = null;
        };
        img.src = branding.videoBackgroundImageUrl;
        return ()=>{
            backgroundImgRef.current = null;
        };
    }, [
        branding.videoBackgroundImageUrl
    ]);
    const draw = (0,react.useCallback)((time, dur)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        drawVideoFrame({
            ctx,
            width,
            height,
            time,
            duration: (dur !== null && dur !== void 0 ? dur : duration) || 1,
            branding,
            segments,
            logoImg: logoImgRef.current,
            backgroundImg: backgroundImgRef.current,
            amplitudeCurve: amplitudeCurve !== null && amplitudeCurve !== void 0 ? amplitudeCurve : undefined
        });
    }, [
        branding,
        segments,
        duration,
        amplitudeCurve
    ]);
    (0,react.useEffect)(()=>{
        const audio = new Audio(audioUrl);
        audioRef.current = audio;
        const ctx = new AudioContext();
        const source = ctx.createMediaElementSource(audio);
        source.connect(ctx.destination);
        audioContextRef.current = ctx;
        audioSourceRef.current = source;
        const onLoaded = ()=>{
            const dur = audio.duration;
            setDuration(dur);
            onDurationLoaded === null || onDurationLoaded === void 0 ? void 0 : onDurationLoaded(dur);
        };
        const onError = ()=>setError("Could not load audio");
        const onTimeUpdate = ()=>{
            var _audio_currentTime;
            return setCurrentTime((_audio_currentTime = audio.currentTime) !== null && _audio_currentTime !== void 0 ? _audio_currentTime : 0);
        };
        audio.addEventListener("loadedmetadata", onLoaded);
        audio.addEventListener("error", onError);
        audio.addEventListener("timeupdate", onTimeUpdate);
        if (audio.readyState >= 1) {
            onLoaded();
        }
        return ()=>{
            audio.pause();
            audio.removeEventListener("loadedmetadata", onLoaded);
            audio.removeEventListener("error", onError);
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audioRef.current = null;
            audioContextRef.current = null;
            audioSourceRef.current = null;
            ctx.close();
        };
    }, [
        audioUrl,
        onDurationLoaded
    ]);
    (0,react.useEffect)(()=>{
        const audio = audioRef.current;
        if (!audio || !canvasRef.current || !duration) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;
        var _audio_currentTime;
        const time = (_audio_currentTime = audio.currentTime) !== null && _audio_currentTime !== void 0 ? _audio_currentTime : 0;
        setCurrentTime(time);
        drawVideoFrame({
            ctx,
            width,
            height,
            time,
            duration,
            branding,
            segments,
            logoImg: logoImgRef.current,
            backgroundImg: backgroundImgRef.current,
            amplitudeCurve: amplitudeCurve !== null && amplitudeCurve !== void 0 ? amplitudeCurve : undefined
        });
    }, [
        branding,
        segments,
        duration,
        amplitudeCurve,
        bgImageReady
    ]);
    (0,react.useEffect)(()=>{
        if (!isPlaying || !audioRef.current) return;
        const audio = audioRef.current;
        let rafId;
        const animate = ()=>{
            const time = audio.currentTime;
            setCurrentTime(time);
            draw(time, audio.duration);
            if (!audio.ended && !audio.paused) {
                rafId = requestAnimationFrame(animate);
            } else {
                setIsPlaying(false);
            }
        };
        rafId = requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(rafId);
    }, [
        isPlaying,
        draw
    ]);
    const togglePlay = (0,react.useCallback)(async ()=>{
        const audio = audioRef.current;
        const ctx = audioContextRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            try {
                if ((ctx === null || ctx === void 0 ? void 0 : ctx.state) === "suspended") await ctx.resume();
                await audio.play();
                setIsPlaying(true);
            } catch (e) {
                setError("Playback failed");
            }
        }
    }, [
        isPlaying
    ]);
    const getCanvasCoords = (0,react.useCallback)((e, container)=>{
        const rect = container.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = (e.clientY - rect.top) / rect.height;
        return {
            x: nx,
            y: ny
        };
    }, []);
    const hitTest = (0,react.useCallback)((nx, ny)=>{
        var _layout_waveform;
        if (!branding.logoUrl) {
        // No logo – skip logo hit test so we don't drag empty space
        } else {
            const logoW = logoSize / width;
            const logoH = logoSize / height;
            if (nx >= layout.logo.x && nx <= layout.logo.x + logoW && ny >= layout.logo.y && ny <= layout.logo.y + logoH) {
                return "logo";
            }
        }
        if (branding.titleVisible) {
            const titleY = layout.title.y;
            if (nx >= layout.title.x && nx <= layout.title.x + 0.35 && ny >= titleY - 0.04 && ny <= titleY + 0.04) {
                return "title";
            }
        }
        const wx = layout.waveform.centerX;
        const wy = layout.waveform.centerY;
        var _layout_waveform_scale;
        const waveformScale = (_layout_waveform_scale = (_layout_waveform = layout.waveform) === null || _layout_waveform === void 0 ? void 0 : _layout_waveform.scale) !== null && _layout_waveform_scale !== void 0 ? _layout_waveform_scale : 1;
        const rx = 220 * waveformScale / width;
        const ry = 220 * waveformScale / height;
        if (((nx - wx) / rx) ** 2 + ((ny - wy) / ry) ** 2 <= 1) return "waveform";
        const subY = layout.subtitle.centerY;
        if (ny >= subY - 0.06 && ny <= subY + 0.06) return "subtitle";
        const barY = layout.progressBar.y;
        if (ny >= barY - 0.02 && ny <= barY + 0.02) return "progressBar";
        return null;
    }, [
        layout,
        branding.logoUrl,
        branding.titleVisible,
        branding.progressBarVisible,
        logoSize,
        width,
        height
    ]);
    const handlePointerDown = (0,react.useCallback)((e)=>{
        if (!containerRef.current || !onLayoutChange) return;
        const { x: nx, y: ny } = getCanvasCoords(e, containerRef.current);
        const hit = hitTest(nx, ny);
        if (hit) {
            e.preventDefault();
            setDragging(hit);
        }
    }, [
        getCanvasCoords,
        hitTest,
        onLayoutChange
    ]);
    (0,react.useEffect)(()=>{
        if (!dragging || !onLayoutChange || !containerRef.current) return;
        let rafId = null;
        let pending = null;
        const flush = ()=>{
            if (pending === null) return;
            const { x: clampedX, y: clampedY } = pending;
            pending = null;
            const latest = layoutRef.current;
            if (dragging === "logo") {
                const logoW = logoSize / width;
                const logoH = logoSize / height;
                const x = Math.max(0, Math.min(1 - logoW, clampedX));
                const y = Math.max(0, Math.min(1 - logoH, clampedY));
                onLayoutChange({
                    ...latest,
                    logo: {
                        x,
                        y
                    }
                });
            } else if (dragging === "title") {
                onLayoutChange({
                    ...latest,
                    title: {
                        x: clampedX,
                        y: clampedY
                    }
                });
            } else if (dragging === "waveform") {
                onLayoutChange({
                    ...latest,
                    waveform: {
                        ...latest.waveform,
                        centerX: clampedX,
                        centerY: clampedY
                    }
                });
            } else if (dragging === "subtitle") {
                onLayoutChange({
                    ...latest,
                    subtitle: {
                        centerY: clampedY
                    }
                });
            } else if (dragging === "progressBar") {
                onLayoutChange({
                    ...latest,
                    progressBar: {
                        y: clampedY
                    }
                });
            }
        };
        const onMove = (e)=>{
            const { x, y } = getCanvasCoords(e, containerRef.current);
            pending = {
                x: Math.max(0, Math.min(1, x)),
                y: Math.max(0, Math.min(1, y))
            };
            if (rafId === null) {
                rafId = requestAnimationFrame(()=>{
                    rafId = null;
                    flush();
                });
            }
        };
        const onUp = ()=>{
            setDragging(null);
            if (rafId !== null) cancelAnimationFrame(rafId);
            if (pending !== null) flush();
        };
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        return ()=>{
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, [
        dragging,
        layout,
        onLayoutChange,
        getCanvasCoords,
        logoSize,
        width,
        height
    ]);
    const handleSeek = (0,react.useCallback)((e)=>{
        if (dragging) return;
        const audio = audioRef.current;
        if (!audio || !duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const fraction = Math.max(0, Math.min(1, x / rect.width));
        const time = fraction * duration;
        audio.currentTime = time;
        setCurrentTime(time);
        draw(time, duration);
    }, [
        duration,
        draw,
        dragging
    ]);
    const handleExport = (0,react.useCallback)(async ()=>{
        const canvas = canvasRef.current;
        if (!canvas || !duration) return;
        setExporting(true);
        setError(null);
        setExportProgress(0);
        const FPS = 30;
        const totalFrames = Math.ceil(duration * FPS);
        try {
            setExportProgress(2);
            const ffmpeg = new esm/* FFmpeg */.C();
            const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
            await ffmpeg.load({
                coreURL: await (0,dist_esm/* toBlobURL */.Wn)("".concat(baseURL, "/ffmpeg-core.js"), "text/javascript"),
                wasmURL: await (0,dist_esm/* toBlobURL */.Wn)("".concat(baseURL, "/ffmpeg-core.wasm"), "application/wasm")
            });
            setExportProgress(5);
            const audioData = await (0,dist_esm/* fetchFile */.dc)(audioUrl);
            await ffmpeg.writeFile("audio.mp3", audioData);
            const exportCanvas = document.createElement("canvas");
            exportCanvas.width = width;
            exportCanvas.height = height;
            const ctx = exportCanvas.getContext("2d");
            if (!ctx) throw new Error("Canvas context not available");
            for(let i = 0; i < totalFrames; i++){
                const time = i / FPS;
                drawVideoFrame({
                    ctx,
                    width,
                    height,
                    time,
                    duration,
                    branding,
                    segments,
                    logoImg: logoImgRef.current,
                    backgroundImg: backgroundImgRef.current,
                    amplitudeCurve: amplitudeCurve !== null && amplitudeCurve !== void 0 ? amplitudeCurve : undefined
                });
                const blob = await new Promise((resolve, reject)=>{
                    exportCanvas.toBlob((b)=>b ? resolve(b) : reject(new Error("toBlob failed")), "image/jpeg", 0.92);
                });
                const buffer = await blob.arrayBuffer();
                const name = "f".concat(String(i).padStart(6, "0"), ".jpg");
                await ffmpeg.writeFile(name, new Uint8Array(buffer));
                const pct = 5 + i / totalFrames * 75;
                setExportProgress(pct);
                if (i % 30 === 0) await new Promise((r)=>setTimeout(r, 0));
            }
            setExportProgress(82);
            await ffmpeg.exec([
                "-framerate",
                String(FPS),
                "-i",
                "f%06d.jpg",
                "-i",
                "audio.mp3",
                "-c:v",
                "libx264",
                "-preset",
                "ultrafast",
                "-crf",
                "23",
                "-c:a",
                "aac",
                "-b:a",
                "192k",
                "-shortest",
                "-pix_fmt",
                "yuv420p",
                "-movflags",
                "+faststart",
                "output.mp4"
            ]);
            setExportProgress(95);
            const outData = await ffmpeg.readFile("output.mp4");
            const blobPart = outData instanceof Uint8Array ? new Uint8Array(outData.slice()) : outData;
            const outBlob = new Blob([
                blobPart
            ], {
                type: "video/mp4"
            });
            const url = URL.createObjectURL(outBlob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "podcast-video-".concat(Date.now(), ".mp4");
            a.click();
            URL.revokeObjectURL(url);
            for(let i = 0; i < totalFrames; i++){
                try {
                    await ffmpeg.deleteFile("f".concat(String(i).padStart(6, "0"), ".jpg"));
                } catch (e) {
                /* ignore */ }
            }
            try {
                await ffmpeg.deleteFile("audio.mp3");
                await ffmpeg.deleteFile("output.mp4");
            } catch (e) {
            /* ignore */ }
            setExportProgress(100);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Export failed");
        } finally{
            setExporting(false);
            setExportProgress(0);
        }
    }, [
        duration,
        branding,
        segments,
        amplitudeCurve,
        audioUrl
    ]);
    const durationMinutes = duration > 0 ? duration / 60 : 0;
    const exportMin = durationMinutes <= 0 ? 0 : Math.max(1, Math.round(durationMinutes * 0.6));
    const exportMax = durationMinutes <= 0 ? 0 : Math.min(60, Math.round(durationMinutes * 2));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "text-sm text-slate-600",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    children: [
                        branding.logoUrl ? "Preview (same as export). Drag the logo, waveform, title, or subtitle to reposition." : "Preview (same as export). Add a logo in Branding settings below, then drag any element to reposition.",
                        " ",
                        "Use the progress bar to scrub through the video."
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm text-slate-700",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "font-medium text-slate-800 mb-2",
                        children: "Export runs locally and can take a while — keep this tab open."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-xs text-slate-600 mb-2",
                        children: "Rough guide:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "text-xs text-slate-600 space-y-0.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        className: "text-slate-700",
                                        children: "5 min"
                                    }),
                                    " audio → about ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "3–8 min"
                                    }),
                                    " export"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        className: "text-slate-700",
                                        children: "30 min"
                                    }),
                                    " audio → about ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "15–45 min"
                                    }),
                                    " export"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        className: "text-slate-700",
                                        children: "Up to 1 h"
                                    }),
                                    " audio → ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                        children: "up to ~1 h"
                                    }),
                                    " export"
                                ]
                            })
                        ]
                    }),
                    duration > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "text-xs text-slate-700",
                        children: [
                            "For this audio (",
                            formatTime(duration),
                            "): about ",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                children: [
                                    exportMin,
                                    "–",
                                    exportMax,
                                    " min"
                                ]
                            }),
                            "."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ref: containerRef,
                className: "relative w-full rounded-xl overflow-hidden bg-black border border-slate-200 shadow-md",
                style: {
                    maxWidth: "100%",
                    aspectRatio: "".concat(width, " / ").concat(height)
                },
                onPointerDown: handlePointerDown,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("canvas", {
                        ref: canvasRef,
                        width: width,
                        height: height,
                        className: "w-full h-full object-contain ".concat(onLayoutChange ? "cursor-move" : "cursor-pointer"),
                        onClick: handleSeek
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute bottom-0 left-0 right-0 p-3 pt-4 bg-gradient-to-t from-black/90 to-transparent",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "range",
                                min: 0,
                                max: duration || 1,
                                step: 0.1,
                                value: duration > 0 ? currentTime : 0,
                                onInput: (e)=>{
                                    const t = parseFloat(e.target.value);
                                    setCurrentTime(t);
                                    if (audioRef.current && duration > 0) {
                                        audioRef.current.currentTime = t;
                                        draw(t, duration);
                                    }
                                },
                                className: "w-full h-2 rounded-full bg-zinc-700/80 cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:bg-indigo-400 [&::-webkit-slider-thumb]:transition-colors [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer",
                                style: {
                                    background: "linear-gradient(to right, rgb(99 102 241) 0%, rgb(99 102 241) ".concat(duration > 0 ? currentTime / duration * 100 : 0, "%, rgb(63 63 70 / 0.8) ").concat(duration > 0 ? currentTime / duration * 100 : 0, "%, rgb(63 63 70 / 0.8) 100%)")
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between mt-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-xs text-slate-600 font-mono tabular-nums",
                                        children: [
                                            formatTime(currentTime),
                                            " / ",
                                            formatTime(duration)
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                type: "button",
                                                onClick: togglePlay,
                                                disabled: exporting,
                                                className: "px-5 py-2 rounded-xl bg-slate-900 text-slate-50 text-sm font-medium shadow-lg hover:bg-black disabled:opacity-50",
                                                children: isPlaying ? "Pause" : "Play"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                type: "button",
                                                onClick: handleExport,
                                                disabled: exporting,
                                                className: "px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-medium shadow-lg disabled:opacity-50",
                                                children: exporting ? "Exporting ".concat(Math.round(exportProgress), "%") : "Download MP4"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            exporting && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "h-2 rounded-full bg-zinc-800 overflow-hidden",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "h-full bg-emerald-500 transition-[width] duration-300",
                    style: {
                        width: "".concat(exportProgress, "%")
                    }
                })
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "text-sm text-red-400",
                children: error
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/lib/srt.ts
/** Parse SRT format back to segments */ function srtToSegments(srt) {
    const blocks = srt.trim().split(/\n\n+/).filter(Boolean);
    const segments = [];
    for (const block of blocks){
        const lines = block.split("\n").filter(Boolean);
        if (lines.length < 2) continue;
        const timeLine = lines[1];
        const match = timeLine.match(/(\d{2}):(\d{2}):(\d{2})[,.](\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})[,.](\d{3})/);
        if (!match) continue;
        const start = parseInt(match[1], 10) * 3600 + parseInt(match[2], 10) * 60 + parseInt(match[3], 10) + parseInt(match[4], 10) / 1000;
        const end = parseInt(match[5], 10) * 3600 + parseInt(match[6], 10) * 60 + parseInt(match[7], 10) + parseInt(match[8], 10) / 1000;
        const text = lines.slice(2).join(" ").trim();
        if (text) segments.push({
            text,
            start,
            end
        });
    }
    return segments;
}
function segmentsToSrt(segments) {
    const toSrtTime = (s)=>{
        const h = Math.floor(s / 3600);
        const m = Math.floor(s % 3600 / 60);
        const sec = Math.floor(s % 60);
        const ms = Math.round(s % 1 * 1000);
        return "".concat(String(h).padStart(2, "0"), ":").concat(String(m).padStart(2, "0"), ":").concat(String(sec).padStart(2, "0"), ",").concat(String(ms).padStart(3, "0"));
    };
    return segments.map((seg, i)=>"".concat(i + 1, "\n").concat(toSrtTime(seg.start), " --> ").concat(toSrtTime(seg.end), "\n").concat(seg.text.trim(), "\n")).join("\n");
}
const FILLER_PATTERN = /\b(um|uh|umm|uhh|ah|ahem|er|erm|you know|i mean)\b/gi;
/** Remove common filler words from segment text */ function removeFillersFromSegments(segments) {
    return segments.map((seg)=>({
            ...seg,
            text: seg.text.replace(FILLER_PATTERN, " ").replace(/\s+/g, " ").trim()
        })).filter((seg)=>seg.text.length > 0);
}

;// CONCATENATED MODULE: ./src/components/TranscriptEditor.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function TranscriptEditor_formatTime(sec) {
    if (!Number.isFinite(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return "".concat(m, ":").concat(String(s).padStart(2, "0"));
}
function TranscriptEditor(param) {
    let { segments, onChange, audioDuration } = param;
    const [srtText, setSrtText] = (0,react.useState)("");
    const [isDirty, setIsDirty] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setSrtText(segmentsToSrt(segments));
        setIsDirty(false);
    }, [
        segments
    ]);
    const handleApply = (0,react.useCallback)(()=>{
        try {
            const parsed = srtToSegments(srtText);
            if (parsed.length > 0) {
                onChange(parsed);
                setIsDirty(false);
            }
        } catch (e) {
        /* keep previous */ }
    }, [
        srtText,
        onChange
    ]);
    const segmentsToCheck = isDirty ? (()=>{
        try {
            return srtToSegments(srtText);
        } catch (e) {
            return segments;
        }
    })() : segments;
    const maxSegmentEnd = segmentsToCheck.length > 0 ? Math.max(...segmentsToCheck.map((s)=>s.end)) : 0;
    const segmentsBeyondAudio = audioDuration != null && audioDuration > 0 && maxSegmentEnd > audioDuration + 1;
    const handleRemoveFillers = (0,react.useCallback)(()=>{
        const filtered = removeFillersFromSegments(segments);
        onChange(filtered);
    }, [
        segments,
        onChange
    ]);
    const handleDownload = (0,react.useCallback)(()=>{
        const srt = isDirty ? srtText : segmentsToSrt(segments);
        const blob = new Blob([
            srt
        ], {
            type: "text/plain;charset=utf-8"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "transcription.srt";
        a.click();
        URL.revokeObjectURL(url);
    }, [
        segments,
        srtText,
        isDirty
    ]);
    if (segments.length === 0) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-3",
        children: [
            isDirty && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "px-4 py-3 rounded-xl bg-amber-50 border border-amber-100 text-amber-800 text-sm flex items-start gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                        label: "Unsaved edits",
                        children: 'These transcript changes are local to this editor until you click "Apply edits". Applying updates the preview and exported video.'
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                className: "font-semibold",
                                children: "Unsaved edits."
                            }),
                            ' Click "Apply edits" below to use these subtitles in the video preview and export.'
                        ]
                    })
                ]
            }),
            segmentsBeyondAudio && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm flex items-start gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                        label: "Subtitle timing",
                        children: "One or more subtitle entries end after the audio file does. Adjust the SRT timings or trim the audio so everything fits inside the episode."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        children: [
                            "Some subtitles are timed ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                children: "after the audio ends"
                            }),
                            " (last at ",
                            TranscriptEditor_formatTime(maxSegmentEnd),
                            ", audio is ",
                            TranscriptEditor_formatTime(audioDuration),
                            "). They will not appear in the video. Use an SRT that matches your audio length, or trim your audio."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap items-center gap-2 mt-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "text-xs font-normal text-slate-600",
                        children: [
                            "Edit the transcript below. ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                            "Click Apply to sync subtitles with the preview and export."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "button",
                        onClick: handleRemoveFillers,
                        className: "px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-amber-600/30 text-white text-xs font-medium transition-colors",
                        children: "Remove fillers (um, uh, like…)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "button",
                        onClick: handleApply,
                        disabled: !isDirty,
                        className: "px-3 py-1.5 rounded-lg bg-indigo-800 hover:bg-indigo-500 disabled:cursor-not-allowed text-white text-xs font-medium transition-colors",
                        children: "Apply edits"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "button",
                        onClick: handleDownload,
                        className: "px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-600 text-zinc-200 text-xs font-medium transition-colors",
                        children: "Download SRT"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                value: srtText,
                onChange: (e)=>{
                    setSrtText(e.target.value);
                    setIsDirty(true);
                },
                className: "w-full h-64 px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-mono resize-y focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none placeholder-slate-400",
                placeholder: "SRT transcript...",
                spellCheck: true
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(3145);
;// CONCATENATED MODULE: ./src/app/logo.png
/* harmony default export */ var logo = ({"src":"/_next/static/media/logo.6eb82839.png","height":405,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEWwsH/WsWTgiUvglj9DapJ3d4vacWmti37H/+NxnYqcqFBqm2JdqlbdV0HbV3HsZypVlaZPl2awQn/OgKGNY5ROV4d1qwwdAAAAFnRSTlMBPZjkgiZTDARR5plt6t5s3Ol+g9fUseb+YwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJwdykcSgCAABMFBwi7BiP7/q1TZ5wYrBAGot7gJXO9x7sW4Xuk5ikHpe+efyNmwACHOAUyX4hbqAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/app/defaultbg.png
/* harmony default export */ var defaultbg = ({"src":"/_next/static/media/defaultbg.52e9f37f.png","height":673,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAARVBMVEWvscNucYeDg6hPQ1rOz90QFSCJWXAyLjyGdZlBOUvAt8EkKzEmKDLIw9E+Q1BKQ2WkpM5oTnGwosG1v9PKqby6lLDRvMbp2WjnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nAXBhwEAIAgDsKog4N7/n2oC2gBSJbyzhld1uDHOHqxBmMUklw8U/AEs6Q/RGQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











function Home() {
    const [audioFile, setAudioFile] = (0,react.useState)(null);
    const [audioUrl, setAudioUrl] = (0,react.useState)(null);
    const [amplitudeCurve, setAmplitudeCurve] = (0,react.useState)(null);
    const [branding, setBranding] = (0,react.useState)(()=>({
            ...DEFAULT_BRANDING,
            logoUrl: null,
            waveformColor: "#ffffff",
            videoBackgroundImageUrl: defaultbg.src,
            videoBackgroundBlur: 4,
            videoBackgroundOverlay: 70,
            waveformStyle: "bars",
            subtitleStyle: {
                ...DEFAULT_BRANDING.subtitleStyle,
                highlightColor: "#fbca04"
            }
        }));
    const [segments, setSegments] = (0,react.useState)([]);
    const [audioDuration, setAudioDuration] = (0,react.useState)(null);
    const [isTranscribing, setIsTranscribing] = (0,react.useState)(false);
    const [transcribeProgress, setTranscribeProgress] = (0,react.useState)(null);
    const [transcribePercent, setTranscribePercent] = (0,react.useState)(0);
    const [transcribeError, setTranscribeError] = (0,react.useState)(null);
    const [useSmallModel, setUseSmallModel] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        if (!audioUrl || isTranscribing) {
            if (!audioUrl) setAmplitudeCurve(null);
            return;
        }
        let cancelled = false;
        computeAmplitudeCurve(audioUrl, 30).then((curve)=>{
            if (!cancelled) setAmplitudeCurve(curve);
        }).catch(()=>{
            if (!cancelled) setAmplitudeCurve(null);
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        audioUrl,
        isTranscribing
    ]);
    const handleFileSelect = (file)=>{
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        setAudioFile(file);
        setAudioUrl(URL.createObjectURL(file));
        setSegments([]);
        setTranscribeError(null);
    };
    async function handleTranscribe() {
        if (!audioUrl) return;
        setIsTranscribing(true);
        setTranscribeError(null);
        setTranscribeProgress("Starting...");
        setTranscribePercent(0);
        setAmplitudeCurve(null);
        let durationSeconds;
        try {
            durationSeconds = await new Promise((resolve, reject)=>{
                const audio = new Audio(audioUrl);
                audio.onloadedmetadata = ()=>resolve(audio.duration);
                audio.onerror = ()=>reject(new Error("Could not load audio"));
            });
        } catch (e) {
            durationSeconds = undefined;
        }
        try {
            const { transcribeAudio } = await __webpack_require__.e(/* import() */ 522).then(__webpack_require__.bind(__webpack_require__, 9522));
            const { segments: nextSegments } = await transcribeAudio(audioUrl, {
                durationSeconds,
                useSmallModel,
                onProgress: (p)=>{
                    setTranscribeProgress(p.label);
                    setTranscribePercent(p.percent);
                }
            });
            setSegments(nextSegments);
        } catch (err) {
            setTranscribeError(err instanceof Error ? err.message : String(err));
        } finally{
            setIsTranscribing(false);
            setTranscribeProgress(null);
            setTranscribePercent(0);
        }
    }
    var _audioFile_name;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        className: "min-h-screen px-5 py-8 md:px-10 md:py-12 app-shell",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "max-w-6xl mx-auto space-y-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                    className: "space-y-3 pb-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex items-center justify-between gap-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "inline-flex items-center p-1 justify-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                            src: logo,
                                            alt: "App logo",
                                            className: "h-24 w-24 object-contain"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                className: "text-[22px] md:text-[28px] font-semibold tracking-tight text-slate-900",
                                                children: "Audio → Video Studio"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-[14px] font-semibold uppercase tracking-[0.05em] text-slate-500 ",
                                                children: "PODCAST TO YOUTUBE‑READY VIDEO"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-sm md:text-[15px] text-slate-600 max-w-2xl leading-relaxed",
                            children: "Drop in an episode, fine‑tune your branding, and export a clean, ready‑to‑upload video — all in one place."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: "rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                            className: "text-[11px] font-semibold text-slate-500 uppercase tracking-[0.1em]",
                                            children: "1. Upload Audio"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                            label: "Audio upload help",
                                            children: "Supports MP3, WAV, or M4A. For best transcription and waveform quality, use high‑bitrate audio without heavy compression."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(AudioUploader, {
                                    onFileSelect: handleFileSelect,
                                    isProcessing: isTranscribing,
                                    fileName: (_audioFile_name = audioFile === null || audioFile === void 0 ? void 0 : audioFile.name) !== null && _audioFile_name !== void 0 ? _audioFile_name : null
                                })
                            ]
                        }),
                        audioUrl && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: "rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "flex items-center gap-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                className: "text-[11px] font-semibold text-slate-500 uppercase tracking-[0.1em]",
                                                children: "2. Subtitles"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                            label: "Transcription help",
                                            children: "Generate a local Whisper transcription. Higher‑accuracy mode improves results on difficult audio but is slower."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "space-y-5 mb-3 mt-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                onClick: handleTranscribe,
                                                disabled: isTranscribing,
                                                className: "mb-0 px-5 py-2.5 rounded-xl bg-slate-900 text-slate-50 font-medium transition-colors w-fit disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:bg-black",
                                                children: isTranscribing ? "Transcribing..." : "Generate Subtitles (With Whisper AI)"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                className: "mt-0 flex items-center gap-2 text-sm text-slate-700 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "checkbox",
                                                        checked: useSmallModel,
                                                        onChange: (e)=>setUseSmallModel(e.target.checked),
                                                        disabled: isTranscribing,
                                                        className: "ms-2 rounded border-slate-300 bg-white text-slate-900 focus:ring-slate-900"
                                                    }),
                                                    "Higher accuracy (Whisper small, slower)"
                                                ]
                                            }),
                                            isTranscribing && transcribeProgress && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "text-sm text-slate-600",
                                                        children: [
                                                            transcribeProgress,
                                                            transcribePercent > 0 && transcribePercent < 100 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "text-slate-800 font-medium ml-1",
                                                                children: [
                                                                    "(",
                                                                    transcribePercent,
                                                                    "%)"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "h-2 w-full max-w-sm rounded-full bg-slate-200 overflow-hidden",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "h-full bg-slate-900 rounded-full transition-[width] duration-300",
                                                            style: {
                                                                width: "".concat(transcribePercent, "%")
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                transcribeError && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-sm text-red-500",
                                    children: transcribeError
                                }),
                                segments.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100 text-sm text-emerald-700",
                                            children: [
                                                segments.length,
                                                " subtitle segment",
                                                segments.length !== 1 ? "s" : "",
                                                " generated"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TranscriptEditor, {
                                            segments: segments,
                                            onChange: setSegments,
                                            audioDuration: audioDuration
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                audioUrl && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: "rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                            className: "text-[11px] font-semibold text-slate-500 uppercase tracking-[0.1em]",
                                            children: "3. Preview & Export Video"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                            label: "Preview controls",
                                            children: "The preview canvas is fully interactive. Drag elements to adjust layout, scrub with the slider, then export when you are happy with the framing."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(VideoPreview, {
                                        audioUrl: audioUrl,
                                        segments: segments,
                                        branding: branding,
                                        amplitudeCurve: amplitudeCurve,
                                        onLayoutChange: (layout)=>setBranding((b)=>({
                                                    ...b,
                                                    layout
                                                })),
                                        onDurationLoaded: setAudioDuration
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: "rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                            className: "text-[11px] font-semibold text-slate-500 uppercase tracking-[0.1em]",
                                            children: "4. Branding & Video Settings"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoTooltip, {
                                            label: "Branding help",
                                            children: "Adjust your podcast title, logo, subtitles, waveform, and background so exported videos match your channel branding."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(BrandingEditor, {
                                    branding: branding,
                                    onChange: setBranding
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [686,971,117,744], function() { return __webpack_exec__(218); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
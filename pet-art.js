/* Original MindBridge companion. Classic script: petSVG() returns standalone SVG. */
function petSVG(accessories = [], coat = 'peach', happy = false) {
  const palettes = {
    peach: ['#F6C6A6', '#BF8C77', '#FFF1DF', '#E8AC8C', 'peach'],
    cream: ['#F5DEB5', '#BA9B77', '#FFF8E9', '#E4C79C', 'cream'],
    gray: ['#C5CDDB', '#8892AB', '#EDF0F8', '#ABB6CC', 'gray'],
    cocoa: ['#C59B83', '#865D57', '#F1D6BF', '#AC7C68', 'cocoa'],
    lavender: ['#D8CAF0', '#AA92C5', '#F6EEFF', '#C1AFE0', 'lavender'],
    mint: ['#C1E0CE', '#83AC9D', '#EDF9ED', '#A2C9B7', 'mint']
  };
  const p = typeof coat === 'string' && Object.prototype.hasOwnProperty.call(palettes, coat)
    ? palettes[coat] : palettes.peach;
  const smiling = happy === true;
  const a = new Set(Array.isArray(accessories) ? accessories : []);
  const labels = { glasses: 'round glasses', scarf: 'a purple scarf', hat: 'a golden star hat', wand: 'a star wand', champion: 'a blue-purple champion star jacket' };
  const worn = Object.keys(labels).filter(id => a.has(id)).map(id => labels[id]);
  const star = 'M0-11L3-4L11-3L5 3L7 11L0 7L-7 11L-5 3L-11-3L-3-4Z';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 280" role="img" aria-label="A fluffy ${p[4]} kitten learning companion${smiling ? ', smiling happily' : ''}${worn.length ? ' with ' + worn.join(', ') : ''}" focusable="false">
  <ellipse cx="151" cy="256" rx="78" ry="10" fill="#493457" opacity=".09"/>
  <g stroke="${p[1]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M185 226C222 248 258 231 244 207C237 195 220 200 225 211" fill="none" stroke-width="27"/>
    <path d="M185 226C222 248 258 231 244 207C237 195 220 200 225 211" fill="none" stroke="${p[0]}" stroke-width="21"/>
    <path d="M244 207C237 195 220 200 225 211" fill="none" stroke="${p[2]}" stroke-width="19"/>
    <path d="M114 174C101 192 101 219 108 237C114 253 182 253 191 237C200 218 195 190 183 174Z" fill="${p[0]}"/>
    <ellipse cx="150" cy="220" rx="28" ry="27" fill="${p[2]}" stroke="none"/>
    ${a.has('wand') ? `<g data-accessory="wand">
      <path d="M42 188L109 225" stroke="#A68163" stroke-width="7"/>
      <path d="M42 188L109 225" stroke="#FFE4A7" stroke-width="3"/>
      <path d="${star}" transform="translate(38 181) scale(1.4)" fill="#FFDA78" stroke="#C2984D" stroke-width="1.8"/>
      <path d="M32 176L35 172" stroke="#FFF7D9" stroke-width="3"/>
      <path d="M16 155V163M12 159H20" stroke="#D6B161" stroke-width="2"/>
    </g>` : ''}
    <path d="M111 193C96 198 95 223 108 227C119 229 123 219 122 207M188 193C203 198 204 223 191 227C180 229 176 219 177 207" fill="${p[0]}"/>
    ${a.has('champion') ? `<g data-accessory="champion" stroke="#655AAB" stroke-width="2.5">
      <path d="M116 184L104 194Q98 203 101 215L119 219L117 237Q150 248 184 237L181 219L200 215Q203 204 196 194L183 184Z" fill="#779DE5"/>
      <path d="M150 190L183 184L196 194Q203 204 200 215L181 219L184 237Q167 243 150 242Z" fill="#9380DC"/>
      <path d="M130 190L150 207L170 190" fill="#E2E6FF"/>
      <path d="M150 208V239M103 213L118 216M182 216L198 212M120 236Q150 245 181 236" fill="none" stroke="#D8D6FF" stroke-width="3"/>
      <path d="${star}" transform="translate(131 219) scale(.65)" fill="#FFE49B" stroke="none"/>
      <path d="${star}" transform="translate(173 215) scale(.42)" fill="#F4E9FF" stroke="none"/>
      <circle cx="150" cy="212" r="2" fill="#FFF1B9" stroke="none"/>
    </g>` : ''}
    <ellipse cx="124" cy="244" rx="23" ry="14" fill="${p[0]}"/>
    <ellipse cx="177" cy="244" rx="23" ry="14" fill="${p[0]}"/>
    <path d="M115 245V249M123 246V250M178 246V250M186 245V249" fill="none" stroke-width="2"/>
    <path d="M69 96C57 80 54 39 66 31C76 24 101 43 114 60M187 60C201 42 226 24 236 33C246 43 238 80 229 96" fill="${p[0]}"/>
    <path d="M72 72C68 62 65 46 70 43C75 41 90 52 97 64ZM204 64C212 52 226 42 230 46C234 50 230 67 226 74Z" fill="#F0A6AE" stroke="none"/>
    <path d="M60 110C60 78 84 59 117 56L128 44L138 52Q148 35 157 50Q170 43 181 56C217 58 239 80 240 111L250 124L245 135L255 146L247 154L250 165C236 184 210 191 185 193Q150 202 115 193C86 192 61 181 50 166L54 155L46 146L55 134L50 124Z" fill="${p[0]}"/>
    <path d="M65 152C75 179 104 188 132 188M172 188C198 189 225 180 236 165" fill="none" stroke="${p[3]}" stroke-width="7" opacity=".45"/>
    <path d="M122 67Q129 77 136 69M145 61Q150 74 155 63M164 68Q170 77 178 67" fill="none" stroke="${p[3]}" stroke-width="5"/>
  </g>
  ${a.has('scarf') ? `<g data-accessory="scarf" stroke="#8160B9" stroke-width="2.5" stroke-linejoin="round">
    <path d="M161 199L180 197L192 227Q181 234 170 228L157 207Z" fill="#9B77D6"/>
    <path d="M170 218L186 215M173 224L189 221" stroke="#CEB9ED" stroke-width="3"/>
    <path d="M112 187Q150 203 188 187L191 201Q150 218 109 201Z" fill="#AE8CE5"/>
    <path d="M121 198Q145 207 161 203" fill="none" stroke="#D5C1F1" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="172" cy="201" rx="10" ry="9" fill="#9B77D6"/>
  </g>` : ''}
  ${a.has('hat') ? `<g data-accessory="hat" stroke="#C29A4D" stroke-width="2.5" stroke-linejoin="round">
    <path d="M130 53L154 15Q159 8 165 16L184 54Z" fill="#FFD881"/>
    <path d="M158 17L177 52" fill="none" stroke="#FFE9B7" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="157" cy="54" rx="33" ry="8" fill="#FFE6A5"/>
    <path d="${star}" transform="translate(157 34) scale(.64)" fill="#FFF6D9" stroke-width="2"/>
  </g>` : ''}
  <ellipse cx="150" cy="163" rx="35" ry="25" fill="${p[2]}"/>
  ${smiling ? '<path d="M95 129Q111 107 127 129M173 129Q189 107 205 129" fill="none" stroke="#382D43" stroke-width="5" stroke-linecap="round"/>' : `<g fill="#382D43">
    <ellipse cx="111" cy="126" rx="18" ry="23"/>
    <ellipse cx="189" cy="126" rx="18" ry="23"/>
  </g>
  <g fill="#79617E">
    <ellipse cx="113" cy="138" rx="10" ry="6"/>
    <ellipse cx="191" cy="138" rx="10" ry="6"/>
  </g>
  <g fill="#FFFFFF">
    <ellipse cx="105" cy="117" rx="6" ry="8"/>
    <ellipse cx="183" cy="117" rx="6" ry="8"/>
    <circle cx="117" cy="132" r="3"/><circle cx="195" cy="132" r="3"/>
  </g>`}
  <g fill="#EE8F9E" opacity=".65">
    <ellipse cx="83" cy="153" rx="15" ry="9"/>
    <ellipse cx="217" cy="153" rx="15" ry="9"/>
  </g>
  <g stroke="#FFF0EB" stroke-width="2.5" stroke-linecap="round" opacity=".8">
    <path d="M77 152L76 155M84 152L83 155M211 152L210 155M218 152L217 155"/>
  </g>
  <path d="M150 152C142 143 135 153 150 161C165 153 158 143 150 152Z" fill="#CE778B"/>
  <path d="M150 161V165M150 165Q143 176 136 167M150 165Q157 176 164 167" fill="none" stroke="#80596A" stroke-width="2.5" stroke-linecap="round"/>
  <g stroke="${p[1]}" stroke-width="2" stroke-linecap="round" opacity=".75">
    <path d="M66 141L77 144M65 151L76 151M223 144L234 141M224 151L235 151"/>
  </g>
  ${a.has('glasses') ? `<g data-accessory="glasses" fill="none" stroke="#74638F" stroke-width="4" stroke-linecap="round">
    <circle cx="111" cy="126" r="27"/><circle cx="189" cy="126" r="27"/>
    <path d="M138 124Q150 116 162 124M84 122L73 118M216 122L227 118"/>
    <path d="M94 111L101 106M172 111L179 106" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>
  </g>` : ''}
</svg>`;
}

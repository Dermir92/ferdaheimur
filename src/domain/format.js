// Deterministic Icelandic formatting, including browsers without Icelandic ICU data.
export const months = ['janúar','febrúar','mars','apríl','maí','júní','júlí','ágúst','september','október','nóvember','desember'];
const shortMonths = ['jan.','feb.','mars','apr.','maí','júní','júlí','ágú.','sept.','okt.','nóv.','des.'];
export const formatAmount = amount => String(Math.round(amount)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
export const formatMonth = value => `${months[Number(value.slice(5,7))-1]} ${value.slice(0,4)}`;
export const shortDate = value => `${Number(value.slice(8,10))}. ${shortMonths[Number(value.slice(5,7))-1]}`;

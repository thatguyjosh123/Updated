// Example of how you might dynamically load testimonials and images

const testimonials = [
    { name: "John Doe", text: "Great service, highly recommend!" },
    { name: "Jane Smith", text: "Professional and efficient. My basement is dry now!" }
];

const galleryImages = [
    { src: "before1.jpg", alt: "Before Waterproofing" },
    { src: "after1.jpg", alt: "After Waterproofing" }
];

document.addEventListener("DOMContentLoaded", () => {
    const testimonialSection = document.getElementById("testimonials");
    const gallerySection = document.getElementById("gallery");
    
    testimonials.forEach(testimonial => {
        const p = document.createElement("p");
        p.textContent = `"${testimonial.text}" - ${testimonial.name}`;
        testimonialSection.appendChild(p);
    });
    
    galleryImages.forEach(image => {
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        gallerySection.appendChild(img);
    });
});

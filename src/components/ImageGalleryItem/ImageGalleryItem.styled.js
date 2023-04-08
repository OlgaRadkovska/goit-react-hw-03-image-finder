import styled from 'styled-components';

export const GalleryItem = styled.li`
  box-shadow: 0px 2px 3px 1px rgba(207, 207, 207, 0.2),
    0px 2px 2px 1px rgba(221, 221, 221, 0.14),
    0px 3px 1px -2px rgba(207, 207, 207, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }

  img {
    display: block;
    max-width: 100%;
    border-radius: 8px;
    width: 100%;
    height: 260px;
    object-fit: cover;
  }
`;

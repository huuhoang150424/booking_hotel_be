import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import TokenError from './error/token-error';

dotenv.config({ path: '.env.local' });

const generaAccessToken = async (user:any) => {
  const tokenKey=process.env.ACCESS_TOKEN_KEY;
  if (!tokenKey) {
    throw new TokenError(' không được định nghĩa trong file .env.local',404);
  }
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    tokenKey,
    { expiresIn: '30m' },
  );
};

const generaRefreshToken = async (user:any) => {
  const tokenKey=process.env.ACCESS_TOKEN_KEY;
  if (!tokenKey) {
    throw new TokenError(' không được định nghĩa trong file .env.local',404);
  }
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    tokenKey,
    { expiresIn: '365d' },
  );
};

export {
	generaAccessToken,
	generaRefreshToken
} ;
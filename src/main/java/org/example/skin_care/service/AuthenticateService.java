package org.example.skin_care.service;

import org.example.skin_care.dto.AuthenticateRequest;
import org.example.skin_care.dto.AuthenticateResponse;

public interface AuthenticateService {

    AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest);
}
